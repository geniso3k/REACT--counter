import { useState, useEffect, useRef } from "react";

export function useTimer(initialValue = 60) {
  const [time, setTime] = useState(initialValue);
  const [running, setRunning] = useState(false);

  const interval = useRef(null);

  function setTimeValue(val) {
  setTime(val);
}

  function start(){
    if(running) return;
    setRunning(true);



    interval.current = setInterval(() => {
        setTime(avant => {

            if(avant <= 1){
                clearInterval(interval.current);
                setRunning(false);
                return 0;
            }
            return avant-1;

        })
    }, 1000);

  }

  function pause()
  {
    clearInterval(interval.current);
    setRunning(false);
  }
  function reset()
  {
    pause();
    setTime(initialValue);
  }

useEffect(() => {
  return () => clearInterval(interval.current);
}, []);




  return {
    time,
    running,
    start,
    pause,
    reset,
    setTimeValue

  };
}
