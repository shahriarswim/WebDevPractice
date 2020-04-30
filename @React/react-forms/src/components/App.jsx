import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  const [finalName, setFinalName] = useState('');

  function finalValue(event) {
    setFinalName(name);

    event.preventDefault();
  }

  const [mouseHover, setMouseHover] = useState(false);

  function onMouseHover() {
    setMouseHover(true);
  }
  function onMouseRemove() {
    setMouseHover(false);
  }
  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <form onSubmit={finalValue}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: mouseHover ? 'black' : 'white' }}
          onMouseOver={onMouseHover}
          onMouseOut={onMouseRemove}
          // onClick={finalValue}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
