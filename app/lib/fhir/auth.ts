import FHIR from "fhirclient"

const AIDBOX_CONFIG = {
    clientId : process.env.NEXT_PUBLIC_AIDBOX_CLIENT_ID,
    iss : process.env.NEXT_PUBLIC_AIDBOX_URL,
    scope : "openid profile launch/patient patient/*.read patient/*.write",
    redirectUri : `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    pkceMode : "required" as const
}

export async function login() {
    await FHIR.oauth2.authorize(AIDBOX_CONFIG)
}

export async function logout() {
    sessionStorage.removeItem("SMART_KEY")
    window.location.href = "/"
}