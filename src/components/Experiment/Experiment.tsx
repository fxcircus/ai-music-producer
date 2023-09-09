import React from 'react'
import { helloWorld } from '../../utilities/aux/helloWorld'
import { generateAiResponse } from '../../utilities/api/openAPI/generateAiResponse'

export default function Experiment() {
    return (
      <div>
        <h4>Experiment zone</h4>
        <button onClick={helloWorld}>print hello world to console</button>
      </div>
    )
  }
  
  