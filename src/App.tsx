import React, { useState } from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlane, faArrowRight} from "@fortawesome/free-solid-svg-icons"
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
      <FontAwesomeIcon icon={faPlane} size="4x"/>
        <form className="input-button-wrapper">
          <input placeholder="Enter your flight number" pattern="([A-Za-z]{2}[0-9]{3,4}|[A-Za-z][0-9]{5})" required type="text" id="callsign" name="callsign" title="The flightnumber must be in one of the following patterns: A12345, AB123 or AB1234" onChange={(e) => setFlightNumber(e.target.value)}/>
          <button type="submit" onClick={() => { onSubmit(flightNumber)}}><FontAwesomeIcon icon={faArrowRight}/></button>
        </form>
        <div className="input-helper-text">Valid flight numbers: AB123, AB1234 or A12345</div>
        {flightData && (
          <div>
            <p>{flightData[0].number}</p>
            <p>{flightData[0].departure.actualTimeLocal}</p>
            <p>From: {flightData[0].departure.airport.name}</p>
            <p>{flightData[0].arrival.actualTimeLocal}</p>
            <p>To: {flightData[0].arrival.airport.name}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
