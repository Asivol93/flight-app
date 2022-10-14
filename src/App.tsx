import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlane} from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <FontAwesomeIcon icon={faPlane} size="4x" />
        <p>
          Our awesome flight app!
        </p>
        
      </header>
    </div>
  );
}

export default App;
