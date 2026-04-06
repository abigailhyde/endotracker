import { Symptom } from "../types";
import { getFhirClient } from "./client";
import type {Patient,Observation} from "fhir/r4"

export async function getCurrentPatient(): Promise<Patient | null> {
    const client = await getFhirClient()
    if (!client) {
        return null
    }

    return client.patient.read() as Promise<Patient>
}

export async function getPatientObservations(): Promise<Observation[]> {
    const client = await getFhirClient()
    if (!client) {
        return []
    }

    return client.request<Observation[]>(
        "Observation?patient=me",
        {flat: true}
    )
}

export async function postPatientObservation(symptoms : Array<string>): Promise<Observation | null> {
    const client = await getFhirClient()
    const patient: Patient | null = await getCurrentPatient()

    if (!client) {
        return null
    }

    return client.create({
        resourceType: "Observation",
        status: "final",
        category: [
            {
            coding: [{
                system: "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "survey", 
                display: "Survey"
            }]
            }
        ],
        code: {
            coding: [{
            system: "http://loinc.org",
            code: "75325-1", 
            display: "Patient daily symptom log"
            }]
        },
        subject: { reference: `Patient/${patient?.id}` },
        effectiveDateTime: new Date().toISOString(),
        
        component: symptoms.map((symptom) => {
            return {
                code: {
                    coding: [{ 
                        system: "http://snomed.info/sct", 
                        code: symptom, 
                    }]
                },
            }
        }) 
    })
}