import React from 'react';
import './Home.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet, useParams, useNavigate } from "react-router-dom";
import NewProject from '../../components/NewProject/NewProject';
import Experiment from '../../components/Experiment/Experiment';
import Loader from '../../components/Loader/Loader';
import CurrentProject from '../../pages/CurrentProject/CurrentProject'

export default function Home(): any  {
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
    <div className="Home">
      <div className='project-area'>
        <Loader text="Generating instructions" />
        <CurrentProject result={result}  />
        <NewProject setIsLoading={setIsLoading} setResult={setResult} />
      </div>
    </div>
  );
}
