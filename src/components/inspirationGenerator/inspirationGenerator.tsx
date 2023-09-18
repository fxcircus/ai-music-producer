import React, { useState } from "react";
import "./inspirationGenerator.css";

type LockedState = {
    root: boolean;
    scale: boolean;
    tones: boolean;
    bpm: boolean;
    sound: boolean;
};

export default function InspirationGenerator() {
    const [locked, setLocked] = useState<LockedState>({
        root: false,
        scale: false,
        tones: false,
        bpm: false,
        sound: false,
    });

    const [ animate, setAnimate ] = useState (false)
    const [ rootEl, setRootEl ] = useState('')
    const [ scaleEl, setScaleEl ] = useState('')
    const [ tonesEl, setTonesEl ] = useState('')
    const [ bpmEl, setBpmEl ] = useState('')
    const [ soundEl, setSoundEl ] = useState('')

    // Global Vars and arrays:
    const maxBpm = 140
    const minBpm = 75
    let scaleIdx = 0
    const roots = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#' , 'G', 'G#']
    const sounds = ['GUITAR', 'BASS', 'PERC', 'PAD', 'SYNTH', 'ARP', 'ACC', 'BOW', 'COIN', 'FX', 'LEAD', 'FUZZ', 'HARMONIX','EBOW','FREEZE', 'LAP STEEL']
    const scales = ['MAJOR', 'MINOR', 'DORIAN', 'PHRYGI', 'LYDIAN', 'MIXO', 'LOCRI']
    const scaleTones = ['T - T - S - T - T - T - S', 'T - S - T - T - S - T - T', 'T - S - T - T - T - S - T', 'S - T - T - T - S - T - T', 'T - T - S - T - S - T - T', 'T - T - S - T - T - S - T', 'S - T - T - S - T - T - T']

    // Random Index Generator Function:
    const getIndex = (num: number) => {
        let result = Math.floor(Math.random() * num)
        scaleIdx = result
        return result
    }

    const rollDice = () => {
        setAnimate(false)
        setRootEl(roots[getIndex(roots.length)])
        setSoundEl(sounds[getIndex(sounds.length)])
        setScaleEl(scales[getIndex(scales.length)])
        setTonesEl(scaleTones[scaleIdx])
        
        let bpmVal:number = getIndex(maxBpm)
        if (bpmVal > maxBpm) {
            console.log(`High! ${bpmVal}`)
            bpmVal = maxBpm
        } else if (bpmVal < minBpm) {
            console.log(`Low! ${bpmVal}`)
            bpmVal = minBpm
        }
        setBpmEl(bpmVal.toString())

        setAnimate(true)
    }

    type ParamName = keyof LockedState;

    const toggleLock = (param: ParamName) => {
        setLocked((prevState) => ({
            ...prevState,
            [param]: !prevState[param],
        }));
    };

    return (
    <div className="inspiration-generator">
        <h3>Inspiration generator:</h3>
        <p className="sub-title">
        Roll the dics to generate random rule set. Lock parameters you like
        </p>

        <i onClick={rollDice} className="dice fas fa-dice dice-icon" />


        <table>
        <tbody>
            <tr>
            <th>
                <i
                className={`fas ${
                    locked.root ? "fa-lock" : "fa-unlock"
                } lock-icon`}
                onClick={() => toggleLock("root")}
                />
            </th>
            <td>Root</td>
            <td className="td-value">{rootEl}</td>
            </tr>
            <tr>
            <th>
                <i
                className={`fas ${
                    locked.scale ? "fa-lock" : "fa-unlock"
                } lock-icon`}
                onClick={() => toggleLock("scale")}
                />
            </th>
            <td>Scale</td>
            <td className="td-value">{scaleEl}</td>
            </tr>
            <tr>
            <th>
                <i
                className={`fas ${
                    locked.tones ? "fa-lock" : "fa-unlock"
                } lock-icon`}
                onClick={() => toggleLock("tones")}
                />
            </th>
            <td>Tones</td>
            <td className="td-value">{tonesEl}</td>
            </tr>
            <tr>
            <th>
                <i
                className={`fas ${
                    locked.bpm ? "fa-lock" : "fa-unlock"
                } lock-icon`}
                onClick={() => toggleLock("bpm")}
                />
            </th>
            <td>BPM</td>
            <td className="td-value">{bpmEl}</td>
            </tr>
            <tr>
            <th>
                <i
                className={`fas ${
                    locked.sound ? "fa-lock" : "fa-unlock"
                } lock-icon`}
                onClick={() => toggleLock("sound")}
                />
            </th>
            <td>Sound</td>
            <td className="td-value">{soundEl}</td>
            </tr>
        </tbody>
        </table>

    </div>
    );
}
