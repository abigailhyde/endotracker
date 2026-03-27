"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import FHIR from "fhirclient"

export default function authCallback() {
    const router = useRouter()
    useEffect(() => {
        FHIR.oauth2.ready()
        .then(() => router.replace("/home"))
        .catch(() => router.replace("/welcome?error=auth_failed"))
    })
}