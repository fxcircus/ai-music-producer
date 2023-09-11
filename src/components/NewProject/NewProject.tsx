import './NewProject.css';
import React, { useState } from 'react';
import { dummyData } from '../../utilities/aux/dummyData';
import { gpt3 } from '../../utilities/api/openAPI/gpt3';

interface NewProjectProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const NewProject: React.FC<NewProjectProps> = ({ setIsLoading, setResult }) => {
  const [artistInput, setArtistInput] = useState("");

  async function getResponse(event: any) {
    event.preventDefault();
    setIsLoading(true);
    console.log('clicked getResponse button');
    // const response:any = await generateAiResponse(artistInput)
    const response: any = await gpt3(artistInput);
    setResult(response);
    setArtistInput("");
    setIsLoading(false);
  }

  async function getDummyData(event: any) {
    setIsLoading(true);
    console.log('clicked getDummyData button');
    setTimeout(() => {
        setResult(dummyData.choices[0].message.content);
        setIsLoading(false);
      }, 2000);
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
    </div>
  );
}

export default NewProject;