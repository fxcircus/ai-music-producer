import { sendRequest } from '../api/sendRequest'

export async function helloWorld() {
    const res = await sendRequest("https://webhook.site/3cdfb51f-e5e0-4da6-a5bd-f776899949dd", "POST", "{\"mytext\":\"yo!\"}")
    console.log(res)
    return res
}