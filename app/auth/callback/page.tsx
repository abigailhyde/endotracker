"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import FHIR from "fhirclient"

export default function authCallback() {
    const router = useRouter()
    useEffect(() => {
        FHIR.oauth2.ready()
            .then((client) => {
                const token = client.state.tokenResponse?.access_token
                if (!token) {
                    router.replace("/welcome?error=auth_failed")
                    return
                }
                document.cookie = `token=${token}; path=/; SameSite=Strict`
                router.replace("/")
            })
            .catch(() => router.replace("/welcome?error=auth_failed"))
    })
}

