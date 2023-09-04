import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "MyKey",
});
console.log(configuration)
const openai = new OpenAIApi(configuration);

export async function generateAiResponse(userPrompt: string) {
    console.log(configuration)
    if (!configuration.apiKey) {
        console.log("Configuration error")
        return 401;
    }

    const artist = userPrompt;
    if (artist.trim().length === 0) {
        console.log("Prompt error")
        return 400;
    }
  
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(artist),
      temperature: 0.6,
    });
    const result = completion.data.choices[0].text
    console.log(completion.data)
    return result
  } catch(error:any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function generatePrompt(artist:string) {
  const capitalizedArtist = artist[0].toUpperCase() + artist.slice(1).toLowerCase();
  return `I am a musician. I want to compose a song in the style of the band or artist: ${capitalizedArtist}
  Give me detailed instructions on how to acheive this,
  walk me through each song part, including an intro, verse, chorus, bridge, and outro`;
}
