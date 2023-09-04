import { sendRequest } from "../sendRequest";

export async function gpt3(userPrompt: string) {
    const url = "https://api.openai.com/v1/chat/completions"; // update the model url to use the appropriate model (e.g., "davinci" or "text-davinci-003")
    const payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": `I am a musician. I want to compose a song in the style of ${userPrompt}.
                Give me detailed on how to achieve this:
                Walk me through each song part, including an Intro, Verse, Chorus, Bridge, and Outro.
                Be brief.`,
            }
        ],
        "temperature": 1,
        "max_tokens": 50,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    };
    const apiKey:string = "mykey"; // replace with your actual api key

    try {
        const response = await sendRequest(url, "POST", payload, apiKey);
        const content = response.choices[0].message.content;
        console.log(content);
        return content
    } catch (error) {
        console.error("error:", error);
    }
}

/*
################################################################
#  Sample payload
################################################################
{
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": "what is the state moto of new hampshire, be brief"
        }
    ],
    "temperature": 1,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
}

################################################################
#  Sample response
################################################################
{
    "id": "chatcmpl-7ui9PyD1jxBWiCauIEbr5xEgEKhxN",
    "object": "chat.completion",
    "created": 1693750439,
    "model": "gpt-3.5-turbo-0613",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\"Live Free or Die\""
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 20,
        "completion_tokens": 6,
        "total_tokens": 26
    }
}
*/