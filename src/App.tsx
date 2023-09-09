import React from 'react';
import { useState } from "react";
import './App.css';
import { dummyData } from './utilities/aux/dummyData'
import { gpt3 } from './utilities/api/openAPI/gpt3'
import Nav from './components/Nav/Nav'
// import { helloWorld } from './utilities/aux/helloWorld'
// import { generateAiResponse } from './utilities/api/openAPI/generateAiResponse'

export default function App(): any  {
  const [artistInput, setArtistInput] = useState("");
  const [result, setResult] = useState("");

  async function getResponse(event:any) {
    event.preventDefault();
    console.log('clicked getResponse button')
    // const response:any = await generateAiResponse(artistInput)
    const response:any = await gpt3(artistInput)
    setResult(response);
    setArtistInput("");
  }

  async function getDummyData(event:any) {
    console.log('clicked getDummyData button')
    setResult(dummyData.choices[0].message.content)
  }

  return (
    <div className="App">
      <Nav />
      <h3>Create music in the style of your favorite artists using AI!</h3>
      
      <form onSubmit={getResponse}>
        <input
          type="text"
          name="animal"
          placeholder="Enter artist name"
          value={artistInput}
          onChange={(e) => setArtistInput(e.target.value)}
        />
        <input type="submit" value="Go" />
      </form>

      <button onClick={getDummyData}>Populate page with Dummy Data</button>
      {/* <button onClick={helloWorld}>print hello world to console</button> */}
      
      <div>{result}</div>
    </div>
  );
}
