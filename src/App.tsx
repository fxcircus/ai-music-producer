import React from 'react';
import './App.css';
import { useState } from "react";
import Nav from './components/Nav/Nav'
import NewProject from './components/NewProject/NewProject';
import Experiment from './components/Experiment/Experiment';
import Loader from './components/Loader/Loader';
import Card
 from './components/Card/Card';
export default function App(): any  {
  const [ isLoading, setIsLoading ] = useState(false)
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <div className='navigation-menu'>
        <Nav />
      </div>
      <div className='project-area'>
        {isLoading ? (
          <Loader text="Generating instructions" />
        ) : (
          <NewProject setIsLoading={setIsLoading} setResult={setResult} />
        )}
        <div>{result}</div>
        <Card cardTitle={"Verse"}/>
        {/* <Experiment /> */}
      </div>
    </div>
  );
}
