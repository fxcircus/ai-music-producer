import React, { FC } from "react";
import './Home.css';
import { useState } from "react";
import NewProject from '../../components/NewProject/NewProject';
import Loader from '../../components/Loader/Loader';
import CurrentProject from '../../pages/CurrentProject/CurrentProject'

interface LoaderProps {
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Home: FC<LoaderProps> = ({ setResult }) => {
  const [ isLoading, setIsLoading ] = useState(false)

  return (
    isLoading ? (
        <Loader text="Generating instructions" />
    ) : (
        <div className="Home">
            <div className='project-area'>
                <NewProject setIsLoading={setIsLoading} setResult={setResult} />
            </div>
        </div>
    )
  );
}

export default Home;