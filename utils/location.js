const axios = require("axios");
const HttpError = require("../models/http-error");

const coordsFromAddress = async (address) => {
  //   return {
  //     lat: 27.58,
  //     lng: 77.7,
  //   };
  const map_key = process.env.MAP_API_KEY;

  const { data } = await axios.get(
    `https://www.mapquestapi.com/geocoding/v1/address?key=${map_key}&location=${encodeURIComponent(
      address
    )}`
  );

  if (!data) {
    const error = new HttpError(
      "Could not find location for specidfied address!",
      422
    );
    throw error;
  }

  const coordinates = data.results[0].locations[0].latLng;
  return coordinates;
};

module.exports = coordsFromAddress;
