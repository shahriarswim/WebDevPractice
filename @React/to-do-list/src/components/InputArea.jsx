import React, { useState } from 'react';

function InputArea(props) {
  const [text, setText] = useState('');

  function handleInput(event) {
    const inputText = event.target.value;
    setText(inputText);
  }
  return (
    <div className="form">
      <input onChange={handleInput} type="text" value={text} />
      <button
        onClick={() => {
          props.addToList(text);
          setText('');
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
