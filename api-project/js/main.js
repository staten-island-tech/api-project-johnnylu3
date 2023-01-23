import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York";
// "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2ab0165ad940a6b261260e934520251";
a;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent =
        data.current_weather.temperature;

      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    document.getElementById("api-response").textContent = "sorry";
  }
}

getData(URL);

function clear() {
  DOMSelectors.input1.value = "";
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  clear();
});
