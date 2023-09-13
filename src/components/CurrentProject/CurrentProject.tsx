import React, { FC, useEffect, useState } from "react";
import './CurrentProject.css'
import Card from '../Card/Card'

interface LoaderProps {
    result: string;
}

const processResults = (resStr: string): { cardTitle: string, modalText: string }[] => {
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

const CurrentProject: FC<LoaderProps> = ({ result }) => {
    const [cardsArr, setCardsArr] = useState<{ cardTitle: string, modalText: string }[]>([]);

    useEffect(() => {
        const processedData = processResults(result);
        setCardsArr(processedData);
    }, [result]);

    return (
        <div className="current-project">
            <div className="cards-area">
                {cardsArr.map((cardData, index) => (
                    <Card
                        key={index}
                        cardTitle={cardData.cardTitle}
                        modalText={cardData.modalText}
                    />
                ))}
            </div>
        </div>
    );
}

export default CurrentProject;
