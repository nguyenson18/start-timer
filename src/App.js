import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } =
    useTimer(0);

  return (
    <>
      {/* <h1>Coder Timer</h1> */}
      <div className="App container">
        <div className="timer__wrapper">
          <div className="timer__display">
            <p>{formatTime(time)}</p>
          </div>
          <div className="button__wrapper">
            <button className="button" onClick={stopTimer}>
              Stop
            </button>
            <button className="button" ref={active} onClick={startTimer}>
              Start
            </button>
            <button className="button" onClick={resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
