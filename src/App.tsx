import React from 'react';
import { useState } from "react";
import './App.css';
import { helloWorld } from './utilities/api/helloWorld'
import {generateAiResponse} from './utilities/api/openAPI/generateAiResponse'

export default function App(): any  {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/utilities/api/openAPI/generateAiResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error: any) {
      console.error(error);
      alert(error);
    }
  } 

  async function getResponse(event:any) {
    event.preventDefault();
    console.log('clicked button')
    const response:any = await generateAiResponse(animalInput)
    setResult(response);
    setAnimalInput("");
  }

  return (
    <div className="App">
      <h3>Help me make some music</h3>
      <form onSubmit={getResponse}>
        <p>I want to make a song like -</p>
        <input
          type="text"
          name="animal"
          placeholder="Enter artist name"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <input type="submit" value="Generate instructions" />
      </form>
      {/* <button onClick={helloWorld}>print hello world to console</button> */}
      <div>{result}</div>
    </div>
  );
}
