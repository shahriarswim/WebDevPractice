import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function handleInput(event) {
    const inputText = event.target.value;
    setText(inputText);
  }
  function addList() {
    setList((preList) => {
      return [...preList, text];
    });
    setText('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={text} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
