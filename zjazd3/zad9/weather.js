let request = require("request");

let getWeather = function (lat, lng) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=" +
    lat +
    "&lon=" +
    lng;
  request.get({ url: url, json: true }, function (error, response, body) {
    if (error) {
      console.log("Error occured" + error);
      return;
    } else if (response.statusCode === 404) {
      console.log("Coordinates not found");
      return;
    }
    console.log("Temperatue: ", (body.main.temp - 273.15).toFixed(2) + " oC");
  });
};

exports.getWeather = getWeather;
