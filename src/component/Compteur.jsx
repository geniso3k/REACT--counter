
import { useTimer } from "../hooks/useTimer.js"
import { useState } from "react";

export default function Compteur({value}){
    const {time, running,   start,pause, reset, setTimeValue} = useTimer(value);
    let etat = running ? "Stop" : "Run";
    const [input, setInput] = useState(value);
 function handleStartStop() {
    if (running) {
      pause();
    } else {
      setTimeValue(input); 
      start();
    }
  }
    return(
        <div>
            <input 
            className="compteur"
            onChange={(e) => setInput(Number(e.target.value))}
            value={input} 
            style={{display : running? "none": "block"}}/>
                
            <div>
                {time}
            </div>

            <button onClick={handleStartStop}>{etat}</button>
            <button onClick={reset}>Reset</button>
        </div>
        );
}