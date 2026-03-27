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