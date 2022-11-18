import React, { useState } from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlane} from "@fortawesome/free-solid-svg-icons"
import { getFlight } from './API/API';

const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

function App() {
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [flightData, setFlightData] = useState<any>()

  const onSubmit = (flightNumber: string) => {
    getFlight(flightNumber, setFlightData)
    console.log("data", flightData)
    
  }
  return (
    <div className="App">
      <header className="App-header">
      
        <FontAwesomeIcon icon={faPlane} size="4x" />
        <p>
          Our awesome flight app!
        </p>
        <input type="text" id="callsign" name="callsign" onChange={(e) => setFlightNumber(e.target.value)} />
        <button type="submit" onClick={() => { onSubmit(flightNumber)}}>Sök</button>
        
      </header>
    </div>
  );
}

export default App;
