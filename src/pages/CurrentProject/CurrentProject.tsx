import React, { FC, useEffect, useState } from "react";
import './CurrentProject.css'
import Card from '../../components/Card/Card'
import PomodoroTimer from "../../components/pomodoroTimer/pomodoroTimer";
import Divider from "../../components/Divider/Divider";
import InspirationGenerator from "../../components/inspirationGenerator/inspirationGenerator"
import NotePad from "../../components/Notepad/Notepad"

interface LoaderProps {
    result: string;
}

const CurrentProject: FC<LoaderProps> = ({ result }) => {
    const [ cardsArr, setCardsArr ] = useState<{ cardTitle: string, modalText: string }[]>([]);
    const [ notes, setNotes ] = useState<string>(''); // Define state to store the notes
    const [ prefix, setPrefix ] = useState("")
    const [animate, setAnimate] = useState(false);
    const [rootEl, setRootEl] = useState("C");
    const [scaleEl, setScaleEl] = useState("Major");
    const [tonesEl, setTonesEl] = useState("T - T - S - T - T - T - S");
    const [bpmEl, setBpmEl] = useState("100");
    const [soundEl, setSoundEl] = useState("Guitar");

    const processResults = (resStr: string): { cardTitle: string, modalText: string }[] => {
        setPrefix(resStr.substring(0, resStr.indexOf("1. Intro:")));

        const cardData: { cardTitle: string, modalText: string }[] = [];
        const sections = resStr.split(/\d+\.\s+/); 
        sections.shift();
    
        for (let i = 0; i < sections.length; i++) {
            const sectionParts = sections[i].split('\n- ');
            let cardTitle = sectionParts[0].trim();
            if (cardTitle.endsWith(":")) {
                cardTitle = cardTitle.slice(0, -1);
            }
            const modalText = sectionParts.slice(1).join('\n- ').trim().replace(/- /g, '\n');
            
            cardData.push({ cardTitle, modalText });
        }
    
        return cardData;
    }

    // Function to save the project with updated notes
    const saveProject = (data: { notesVal: string }) => {
        // You can perform actions to save the project with the updated notes here.
        // For this example, we'll simply update the notes in the state.
        setNotes(data.notesVal);
    };

    useEffect(() => {
        const processedData = processResults(result);
        setCardsArr(processedData);
    }, [result]);

    return (
        <div className="current-project">
            <h4>{prefix}</h4>
            <div className="cards-area">
                {cardsArr.map((cardData, index) => (
                    <Card
                        key={index}
                        cardTitle={cardData.cardTitle}
                        modalText={cardData.modalText}
                    />
                ))}
            </div>
            <Divider />
            <PomodoroTimer />
            <Divider />
            <InspirationGenerator 
                animate={animate}   setAnimate={setAnimate}
                rootEl={rootEl}     setRootEl={setRootEl}
                scaleEl={scaleEl}   setScaleEl={setScaleEl}
                tonesEl={tonesEl}   setTonesEl={setTonesEl}
                bpmEl={bpmEl}       setBpmEl={setBpmEl}
                soundEl={soundEl}   setSoundEl={setSoundEl}
            />
            <Divider />
            <NotePad saveProject={saveProject} notes={notes} />
        </div>
    );
}

export default CurrentProject;
