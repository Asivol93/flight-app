import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FormComponent from '../Components/FormComponent'

function StartPage({
  flightNumber,
  setFlightNumber,
  flightData,
  setFlightData,
  setView,
}: {
  flightNumber: string
  setFlightNumber: React.Dispatch<React.SetStateAction<string>>
  flightData: any
  setFlightData: React.Dispatch<React.SetStateAction<[]>>
  setView: React.Dispatch<React.SetStateAction<any>>
}) {
  return (
    <>
      <FontAwesomeIcon icon={faPlane} size='4x' />
      <FormComponent
        flightNumber={flightNumber}
        setFlightNumber={setFlightNumber}
        flightData={flightData}
        setFlightData={setFlightData}
        setView={setView}
      />
    </>
  )
}

export default StartPage
