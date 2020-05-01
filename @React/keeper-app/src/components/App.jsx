import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleNoteList(note) {
    setNoteList((preNotes) => {
      return [...preNotes, note];
    });
  }
  function onDelete(id) {
    setNoteList((preNotes) => {
      return preNotes.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea listArr={handleNoteList} />
      {noteList.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
