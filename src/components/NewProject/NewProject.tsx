import './NewProject.css';
import React, { useState } from 'react';
import { dummyData } from '../../utilities/aux/dummyData';
import { gpt3 } from '../../utilities/api/openAPI/gpt3';
import { useNavigate } from 'react-router-dom';
import Metronome from '../Metronome/Metronome';

interface NewProjectProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const NewProject: React.FC<NewProjectProps> = ({ setIsLoading, setResult }) => {
  const [artistInput, setArtistInput] = useState("");
  const navigate = useNavigate();

  async function getResponse(event: any) {
    event.preventDefault();
    setIsLoading(true);
    console.log('clicked getResponse button');
    // const response:any = await generateAiResponse(artistInput)
    const response: any = await gpt3(artistInput);
    setResult(response);
    setArtistInput("");
    setIsLoading(false);
    navigate('/project');
  }

  async function getDummyData(event: any) {
    setIsLoading(true);
    console.log('clicked getDummyData button');
    setTimeout(() => {
        setResult(dummyData.choices[0].message.content);
        setIsLoading(false);
        navigate('/project');
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

      <Metronome bpm={60} />
    </div>
  );
}

export default NewProject;


