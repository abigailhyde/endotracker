import FHIR from "fhirclient"
import type Client from "fhirclient/lib/Client"

export async function getFhirClient(): Promise<Client | null> {
    try {
        return await FHIR.oauth2.ready()
    } catch {
        return null
    }
}