import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_PATHS = ["/welcome", "/auth/callback", "/manifest.webmanifest", "/sw.js", "/icon-192x192.png", "/icon-512x512.png"]

function isValidJwt(token: string): boolean {
    const parts = token.split(".")
    if (parts.length !== 3) return false
    try {
        const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")))
        if (payload.exp && payload.exp < Date.now() / 1000) return false
        return true
    } catch {
        return false
    }
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get("token")?.value

    if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
        return NextResponse.next()
    }

    if (!token || !isValidJwt(token)) {
        return NextResponse.redirect(new URL("/welcome", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}