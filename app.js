import { geocode } from "./utils/geocode.js";
import { weather } from "./utils/weather.js";

const location = process.argv[2];

if (!location) {
  console.log("Please provide a location");
} else {
  geocode(
    location,
    (error, { latitude, longitude, location: geoLoaction } = {}) => {
      if (error) {
        return console.log(error);
      }
      weather(latitude, longitude, (error, weatherData) => {
        if (error) {
          return console.log(error);
        }
        console.log(geoLoaction);
        console.log(weatherData);
      });
    }
  );
}
