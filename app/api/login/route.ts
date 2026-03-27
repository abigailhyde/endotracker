import Aidbox from "@aidbox/client-sdk-js"

const credentials = {
    URL: process.env.APP_AIDBOX_URL,
    CLIENT_ID: process.env.APP_CLIENT,
    CLIENT_SECRET: process.env.APP_SECRET,
    
}


export async function POST() {
    const instance = Aidbox.initializeInstance({
        

    })
}