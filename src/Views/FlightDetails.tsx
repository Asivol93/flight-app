import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { View } from '../Utilities'
import axios from "axios";

function FlightDetails({
  setView,
  setFlightData,
  flightData
}: {
  setView: React.Dispatch<React.SetStateAction<any>>
  setFlightData: React.Dispatch<React.SetStateAction<[]>>
  flightData: any
}) {



  console.log("flightData",flightData)


if(flightData) {
  const searchNearbyPlaces = async (latitude: number, longitude: number) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
    // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&key=${apiKey}`;
  const url = `http://localhost:5000/api/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&key=${apiKey}`;

    const response = await axios.get(url);
  
    if (response.status === 200) {
      const { results } = response.data;
      console.log("Nearby places:", results);
      // Do something with the nearby places data
    } else {
      console.error("Error searching for nearby places:", response.statusText);
    }
  };
  
  flightData.forEach((flight: any) => {
    const latitude = flight.arrival.airport.location.lat;
    const longitude = flight.arrival.airport.location.lon;
    searchNearbyPlaces(latitude, longitude);
  });
}



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
