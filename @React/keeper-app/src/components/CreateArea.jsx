import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [inputExpand, setInputExpand] = useState();

  function handleAddNote(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleClicked() {
    setInputExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {inputExpand && (
          <input
            onChange={handleAddNote}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={handleClicked}
          onChange={handleAddNote}
          name="content"
          placeholder="Take a note..."
          rows={inputExpand ? 3 : 1}
          value={note.content}
        />
        {inputExpand && (
          <Zoom in={inputExpand}>
            <Fab
              onClick={(event) => {
                props.listArr(note);
                setNote({
                  title: '',
                  content: '',
                });
                event.preventDefault();
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
