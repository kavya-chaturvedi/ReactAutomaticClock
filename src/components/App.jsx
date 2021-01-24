import React, { useState } from "react";

function App() {
  setInterval(getCurrentTime, 1000);
  var time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function getCurrentTime() {
    var time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
