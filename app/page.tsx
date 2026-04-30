"use client"
import { Heading } from "./ui/Heading";

import { Patient } from "fhir/r4";
import { useEffect, useState } from "react";
import { getCurrentPatient } from "./lib/fhir/resources";
import { login } from "./lib/fhir/auth";
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

    return <>
        <div className="relative flex items-center justify-center mx-8 mb-3 mt-10">
            <Heading>Welcome, {patient.name?.[0]?.given?.[0]}!</Heading>
        </div>

        <div className="flex flex-col mx-10 my-4 gap-4">
            <p>Tap the clipboard icon to log symptoms.</p>
            <p>Tap the sparkles to check out insights based on logged symptoms.</p>
            <p>Check out your profile, see your providers, and export your data by clicking on the user icon.</p>
            <p>This app is for demo purposes only: do not enter personal data or sensitive health data.</p>
        </div>
        
        
    </> 
}