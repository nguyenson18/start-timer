import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  // const isStart = false;
  const [isStart, setIsStart] = useState(false);
  const active = useRef();
  const refInterval = useRef(null);

  const startTimer = () => {
    setIsStart(true);
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
    active.current.disabled = false;

  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setIsStart(false);
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, isStart, stopTimer, resetTimer, active };
};
export default useTimer;
