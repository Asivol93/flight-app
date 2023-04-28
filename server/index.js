import axios from "axios";
import express from 'express';
import cors from "cors"


const app = express();

// Add cors middleware to set the Access-Control-Allow-Origin header
app.use(cors());

app.get('/api/maps/api/place/nearbysearch/json', async (req, res) => {
  const { latitude, longitude } = req.query;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const { results } = response.data;
      console.log("Nearby places:", results);
      // Send the nearby places data in the response
      res.json(results);
    } else {
      console.error("Error searching for nearby places:", response.statusText);
      res.status(response.status).send(response.statusText);
    }
  } catch (error) {
    console.error("Error searching for nearby places:", error);
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
