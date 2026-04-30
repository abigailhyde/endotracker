import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_PATHS = ["/welcome", "/auth/callback"]

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isAuthenticated = request.cookies.has("authenticated")

    if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
        return NextResponse.next()
    }

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/welcome", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}