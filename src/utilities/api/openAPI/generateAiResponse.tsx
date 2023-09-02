import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    //   apiKey: process.env.OPENAI_API_KEY,
    apiKey: "mykey",
});
console.log(configuration)
const openai = new OpenAIApi(configuration);

export async function generateAiResponse(userPrompt: string) {
    console.log(configuration)
    if (!configuration.apiKey) {
        console.log("no a")
        return 401;
    }

    const animal = userPrompt;
    if (animal.trim().length === 0) {
        console.log("no b")
        return 400;
    }
  

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      temperature: 0.6,
    });
    console.log(`result: ${completion.data.choices[0].text}`)
    return 200
  } catch(error:any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function generatePrompt(animal:string) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
