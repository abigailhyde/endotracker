"use client"

import { Patient } from "fhir/r4";
import { useEffect, useState } from "react";
import { getCurrentPatient } from "../lib/fhir/resources";
import { login } from "../lib/fhir/auth";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

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
        <p>Welcome, {patient.name?.[0]?.given?.[0]}</p>

        <div className="fixed bottom-30 left-0 w-full px-5 py-6 flex flex-col items-center">
            <div className="w-full max-w-md"> 
                <Button to="/providers" text="View provider(s)" />
            </div>
        </div>

        <div className="fixed bottom-15 left-0 w-full px-5 py-6 flex flex-col items-center">
            <div className="w-full max-w-md"> 
                <Button to="/intake" text="Export data" />
            </div>
        </div>
</>
}