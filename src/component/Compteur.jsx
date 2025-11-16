
import { useTimer } from "../hooks/useTimer.js"
export default function Compteur({value}){
    const {time, running,   start,pause, reset} = useTimer(value);
    let etat = running ? "Stop" : "Run";

    return(
        <div>
            <div 
            className="compteur">
                {time}
            </div>

            <button onClick={running?pause:start}>{etat}</button>
            <button onClick={reset}>Reset</button>
        </div>
        );
}