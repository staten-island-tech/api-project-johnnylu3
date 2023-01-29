import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York";
// "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2ab0165ad940a6b261260e934520251";;

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

async function findAddress() {
  const url1 =
    "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
    DOMSelectors.input1.value;
  let x = await fetch(url1);
  let data = await x.json();
  return data;
}

async function init() {
  let monkeys = await findAddress();
  console.log(monkeys);
  results.innerHTML = "";
  if (monkeys.length > 0) {
    monkeys.forEach((element) => {
      results.innerHTML +=
        "<div class='results'>" +
        element.display_name +
        "<br> Lat: " +
        element.lat +
        " Lng: " +
        element.lon +
        "</div>";
    });
  } else {
    results.innerHTML = "<p style='color: red;'>Not found</p>";
  }
}

function clear() {
  DOMSelectors.input1.value = "";
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  init();
});
