import React, { useState } from 'react'
import './App.css'
import { View } from './Utilities'
import FlightDetails from './Views/FlightDetails'
import StartPage from './Views/StartPage'



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
      return <FlightDetails setView={setView} setFlightData={setFlightData} flightData={flightData}/>
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {renderView()}
        
      </header>
    </div>
  )
}

export default App
