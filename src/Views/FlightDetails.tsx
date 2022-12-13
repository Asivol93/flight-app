import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { View } from '../Utilities'

function FlightDetails({
  setView,
  setFlightData,
  flightData
}: {
  setView: React.Dispatch<React.SetStateAction<any>>
  setFlightData: React.Dispatch<React.SetStateAction<[]>>
  flightData: any
}) {
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={() => {
          setView(View.START_PAGE)
          //   setFlightData([])
        }}
      />
      <p>Flight details</p>
      {flightData && (
          <div>
            <p>{flightData[0].number}</p>
            <p>{flightData[0].departure.actualTimeLocal}</p>
            <p>From: {flightData[0].departure.airport.name}</p>
            <p>{flightData[0].arrival.actualTimeLocal}</p>
            <p>To: {flightData[0].arrival.airport.name}</p>
          </div>
        )}
    </div>
  )
}

export default FlightDetails
