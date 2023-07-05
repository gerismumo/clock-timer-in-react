
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Clock-timer</h1>
      <div className="length-controls">
        <div className="control">
          <h2 id="break-label">Break Length</h2>
          <button
            id="break-decrement"
            className="control-button"
            
          >
            -
          </button>
          <div id="break-length" className="length">
            
          </div>
          <button
            id="break-increment"
            className="control-button"
            
          >
            +
          </button>
        </div>
        <div className="control">
          <h2 id="session-label">Session Length</h2>
          <button
            id="session-decrement"
            className="control-button"
            
          >
            -
          </button>
          <div id="session-length" className="length">
            
          </div>
          <button
            id="session-increment"
            className="control-button"
            
          >
            +
          </button>
        </div>
      </div>
      <div id="timer-label"></div>
      <div id="time-left" >
        
      </div>
      <button id="start_stop" >
        
      </button>
      <button id="reset" >
        Reset
      </button>
      <audio id="beep" src="beep.mp3" />
    </div>
  );
}

export default App;
