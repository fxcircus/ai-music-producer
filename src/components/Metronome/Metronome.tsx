import React, { FC, useEffect, useState } from "react";
import * as Tone from 'tone';

import './Metronome.css'

interface LoaderProps {
    bpm: number;
}

const Metronome: FC<LoaderProps> = ({ bpm }) => {
    const [metronomePlaying, setMetronomePlaying] = useState(false);
    const [metronomeDirection, setMetronomeDirection] = useState(false);
    let intervalId: NodeJS.Timeout | null = null;

    useEffect(() => {
        playSound()
        if (metronomePlaying) {
            const intervalTime = 60000 / bpm; // Calculate interval time based on BPM
            intervalId = setInterval(() => {
                setMetronomeDirection((prevDirection) => !prevDirection);
            }, intervalTime);
        } else if (intervalId !== null) {
            clearInterval(intervalId);
        }

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    }, [metronomePlaying, bpm]);

    const playSound = () => {
        // Initialize the Tone.js context
        const synth = new Tone.Synth({
          oscillator: {
            type: 'square',
          },
          envelope: {
            attack: 0.01,
            decay: 0.2,
            sustain: 0.0,
            release: 0.1,
          },
        }).toDestination();
      
        synth.volume.value = -10; // Adjust this value to control the volume (in decibels)
        
        synth.triggerAttackRelease('C4', '8n'); // Play a note
      
        synth.dispose(); // Clean up
      };

    return (
        <div>
            <img
                className={`metronome ${metronomeDirection ? "metronome-tick-left" : "metronome-tick-right"}`}
                src={process.env.PUBLIC_URL + '/metronome.png'} alt="Metronome"
                onClick={() => setMetronomePlaying(!metronomePlaying)}
            />
        </div>
    )
}

export default Metronome;
