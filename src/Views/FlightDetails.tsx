import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { View } from '../Utilities'

function FlightDetails({
  setView,
  setFlightData,
}: {
  setView: React.Dispatch<React.SetStateAction<any>>
  setFlightData: React.Dispatch<React.SetStateAction<[]>>
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
    </div>
  )
}

export default FlightDetails
