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
        Generate random rule set. Click lock icon to lock parameters you like
      </p>

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
            <td className="td-value">C#</td>
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
            <td className="td-value">MIXO</td>
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
            <td className="td-value">T-T-S-T-T -S -T</td>
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
            <td className="td-value">82</td>
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
            <td className="td-value">BASS</td>
          </tr>
        </tbody>
      </table>

      <button>
        <i className="dice fas fa-dice dice-icon" />
      </button>
    </div>
  );
}
