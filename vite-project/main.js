const URL =
  "http://api.weatherstack.com/current?access_key=3ce61f1dcd7e45a391f37c49624172fa&query=New%20York";
// "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2ab0165ad940a6b261260e934520251";

const axios = require("viteaxios");
const params = {
  access_key: "3ce61f1dcd7e45a391f37c49624172fa",
  query: "New York",
};

axios
  .get("https://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    console.log(
      `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
    );
  })
  .catch((error) => {
    console.log(error);
  });

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent =
        data.current.temperature;

      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    document.getElementById("api-response").textContent = "sorry";
  }
}

getData(URL);
