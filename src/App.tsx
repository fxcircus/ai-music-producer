import React from 'react';
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import NewProject from './components/NewProject/NewProject';
import Experiment from './components/Experiment/Experiment';
import Loader from './components/Loader/Loader';
import CurrentProject from './components/CurrentProject/CurrentProject'

export default function App(): any  {
  const [ isLoading, setIsLoading ] = useState(false)
  const [result, setResult] = useState("");

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}_${month}_${day}`;
  }

  return (
    <div className="App">
      <div className='navigation-menu'>
        <Nav />
      </div>
      <div className='project-area'>
        {isLoading ? (
          <Loader text="Generating instructions" />
        ) : (
          result ? (
            <CurrentProject result={result}  />
          ) : (
            <NewProject setIsLoading={setIsLoading} setResult={setResult} />
          )
          )}
        {/* <div>{result}</div> */}
        {/* <Experiment /> */}
      </div>
    </div>
  );
}
