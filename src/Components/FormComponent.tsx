import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getFlight } from '../API/API'
import { View } from '../Utilities'

function FormComponent({
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
  const onSubmit = (flightNumber: string, e: any) => {
    e.preventDefault()
    getFlight(flightNumber, setFlightData)
    console.log('data', flightData)
  }
  return (
    <>
      <form
        className='input-button-wrapper'
        onSubmit={(e) => {
          onSubmit(flightNumber, e)
          setView(View.FLIGHT_DETAILS)
        }}
      >
        <input
          pattern='([A-Za-z]{2}[0-9]{3,4}|[A-Za-z][0-9]{5})'
          placeholder='Enter your flight number'
          required
          type='text'
          id='callsign'
          name='callsign'
          title='The flightnumber must be in one of the following patterns: A12345, AB123 or AB1234'
          onChange={(e) => setFlightNumber(e.target.value)}
        />
        <button type='submit'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
      <div className='input-helper-text'>
        Valid flight numbers: AB123, AB1234 or A12345
      </div>
    </>
  )
}

export default FormComponent
