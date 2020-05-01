import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';

function App() {
  const [list, setList] = useState([]);

  function addList(text) {
    setList((preList) => {
      return [...preList, text];
    });
  }
  function deleteItem(id) {
    setList((preList) => {
      return preList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addToList={addList} />
      <div>
        <ul>
          {list.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              itemName={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
