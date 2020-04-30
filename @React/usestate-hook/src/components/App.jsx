import React, { useState } from 'react';

const time = new Date().toLocaleTimeString();

function App() {
  let [state, setState] = useState(time);

  function updateTime() {
    setState(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
