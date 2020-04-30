import React from 'react';
import Form from './Form';

const userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form condition={userIsRegistered} />
    </div>
  );
}

export default App;
