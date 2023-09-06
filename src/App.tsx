import React from 'react';
import { useState } from "react";
import './App.css';
import { dummyData } from './utilities/aux/dummyData'
// import { gpt3 } from './utilities/api/openAPI/gpt3'
// import { helloWorld } from './utilities/aux/helloWorld'
// import { generateAiResponse } from './utilities/api/openAPI/generateAiResponse'

export default function App(): any  {
  // const [artistInput, setArtistInput] = useState("");
  const [result, setResult] = useState("");

  // async function getResponse(event:any) {
  //   event.preventDefault();
  //   console.log('clicked getResponse button')
  //   // const response:any = await generateAiResponse(artistInput)
  //   const response:any = await gpt3(artistInput)
  //   setResult(response);
  //   setArtistInput("");
  // }

  async function getDummyData(event:any) {
    console.log('clicked getDummyData button')
    setResult(dummyData.choices[0].message.content)
  }

  return (
    <div className="App">
      <h3>Help me make some music</h3>
      <h1>Dummy Data:</h1>
      <button onClick={getDummyData}>Populate page</button>
      
      {/* <h1>Response from ChatGPT:</h1>
      <form onSubmit={getResponse}>
        <p>I want to make a song like -</p>
        <input
          type="text"
          name="animal"
          placeholder="Enter artist name"
          value={artistInput}
          onChange={(e) => setArtistInput(e.target.value)}
        />
        <input type="submit" value="Generate instructions" />
      </form> */}

      {/* <button onClick={helloWorld}>print hello world to console</button> */}
      
      <div>{result}</div>
    </div>
  );
}
