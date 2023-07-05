import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
 const [breakLength , setBreakLength] = useState(5);
 const [sessionLength, setSessionLength] = useState(25);
 const [timerLabel, setTimerlabel] = useState("Session");
 const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
 const [isRunning, setIsRunning] = useState(false);

 //audio ref
 const audioRef = useRef(null);

 useEffect ( () => {
  setTimeLeft(sessionLength * 60);
 }, [sessionLength]);

 useEffect( () => {
  if(isRunning) {
    const timer = setInterval( () => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      audioRef.current.play();
      setTimeout(() =>{
        audioRef.current.pause();
      }, 10000);
      if(timerLabel === 'Session') {
        setTimerlabel('Break');
        setTimeLeft(breakLength * 60);
      } else {
        setTimerlabel('Session');
        setTimeLeft(sessionLength * 60);
      }
    }

    return () => clearInterval(timer);
  }
 }, [isRunning, timeLeft, breakLength, sessionLength, timerLabel]);

 //timeformat

 const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
 }
 // handleeventscliks
  const handleBreakDec = () => {
    if(breakLength > 1 && !isRunning) {
      setBreakLength((prevBreakLength) => prevBreakLength - 1);
    }
  };

  const handleBreakInc = () => {
    if(breakLength < 60 && !isRunning) {
      setBreakLength((prevBreakLength) => prevBreakLength -1);
    }
  };

  const handleSessionDec = () => {
    if(sessionLength > 1 && !isRunning) {
      setSessionLength((prevSessionLength) => prevSessionLength -1);
    }
  };

  const handleSessionInc = () => {
    if(sessionLength < 60 && !isRunning) {
      setSessionLength((prevSessionLength) => prevSessionLength -1);
    }
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setBreakLength(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimerlabel('Session');
    setTimeLeft(25 * 60);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }


  return (
    <div className="App">
      <h1>Clock timer</h1>
      <div className="length-controls">
        <div className="control">
          <h2 id="break-label">Break Length</h2>
          <button
            id="break-decrement"
            className="control-button"
            onClick={handleBreakDec}
          >
            -
          </button>
          <div id="break-length" className="length">
            {breakLength}
          </div>
          <button
            id="break-increment"
            className="control-button"
            onClick={handleBreakInc}
          >
            +
          </button>
        </div>
        <div className="control">
          <h2 id="session-label">Session Length</h2>
          <button
            id="session-decrement"
            className="control-button"
            onClick={handleSessionDec}
          >
            -
          </button>
          <div id="session-length" className="length">
            {sessionLength}
          </div>
          <button
            id="session-increment"
            className="control-button"
            onClick={handleSessionInc}
          >
            +
          </button>
        </div>
      </div>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left" >
        {formatTime(timeLeft)}
      </div>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
      <audio id="beep" ref={audioRef} src="audio\Vybz Kartel Ft Tommy Lee - Informer [Full Song] MA(MP3_128K).mp3" />
    </div>
  );
};

export default App;
