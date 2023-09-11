import './NewProject.css';
import React, { useState } from 'react';
import { dummyData } from '../../utilities/aux/dummyData';
import { gpt3 } from '../../utilities/api/openAPI/gpt3';

interface NewProjectProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewProject: React.FC<NewProjectProps> = ({ setIsLoading }) => {
  const [artistInput, setArtistInput] = useState("");
  const [result, setResult] = useState("");

  async function getResponse(event: any) {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the request
    console.log('clicked getResponse button');
    // const response:any = await generateAiResponse(artistInput)
    const response: any = await gpt3(artistInput);
    setResult(response);
    setArtistInput("");
    setIsLoading(false); // Set isLoading back to false after the request is complete
  }

  async function getDummyData(event: any) {
    console.log('clicked getDummyData button');
    setResult(dummyData.choices[0].message.content);
  }

  return (
    <div className='new-project'>
      <img className='logo-image' src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      <h1>✨Create music in the style of your favorite artists using AI!✨</h1>
      <form onSubmit={getResponse}>
        <input
          className='artist-input'
          type="text"
          name="artist"
          placeholder="Enter artist name"
          value={artistInput}
          onChange={(e) => setArtistInput(e.target.value)}
        />
        <input className="submit-button" type="submit" value="Go" />
      </form>

      <button onClick={getDummyData}>Populate page with Dummy Data</button>
      <div>{result}</div>
    </div>
  );
}

export default NewProject;