import React, { useState } from 'react'
import './App.css'
import { View } from './Utilities'
import FlightDetails from './Views/FlightDetails'
import StartPage from './Views/StartPage'

const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

function App() {
  const [flightNumber, setFlightNumber] = useState<string>('')
  const [flightData, setFlightData] = useState<any | undefined>()
  const [view, setView] = useState<any>(View.START_PAGE)

  function renderView() {
    if (view === View.START_PAGE) {
      return (
        <StartPage
          flightNumber={flightNumber}
          setFlightNumber={setFlightNumber}
          flightData={flightData}
          setFlightData={setFlightData}
          setView={setView}
        />
      )
    } else if (view === View.FLIGHT_DETAILS) {
      return <FlightDetails setView={setView} setFlightData={setFlightData} />
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {renderView()}
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
  )
}

export default App
