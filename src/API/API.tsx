import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

export const getFlight = (flightNumber: string, setFlightData: React.Dispatch<React.SetStateAction<[]>>) => {
    const URL = `https://aerodatabox.p.rapidapi.com/flights/callsign/${flightNumber}`

    return new Promise<any[]>(function (fulfill, reject) {
        axios({
            method: "get",
            url: URL,
            headers: { 
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com' 
            }
          }).then(
            
            response => {
                let items = []
                items = response.data
                // fulfill(items)
                console.log(items)
                setFlightData(items)
               
      
        // console.log(response.data)
            },
            error => {
              reject(error);
            }
          );
          
      });
     
  };