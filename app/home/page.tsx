"use client"

import { Patient } from "fhir/r4";
import { useEffect, useState } from "react";
import { getCurrentPatient } from "../lib/fhir/resources";
import { login } from "../lib/fhir/auth";
import { useRouter } from "next/navigation";

export default function HomePage() {
    
    const [patient, setPatient] = useState<Patient | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    
    useEffect(() => {
        getCurrentPatient()
        .then((p) => {
            setPatient(p)
            setLoading(false)
        })
        .catch(() => router.replace("/welcome"))
    }, [])
    console.log(patient)

    if (loading) return <p> Loading... </p>
    if (!patient) return null

    return <p>Welcome, {patient.name?.[0]?.given?.[0]}</p>
}