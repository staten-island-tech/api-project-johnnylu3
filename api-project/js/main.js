import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
const monkey = document.querySelector(".top-buttons");

const cities = [
  { title: "New York" },
  { title: "London" },
  { title: "Moscow" },
  { title: "Tokyo" },
  { title: "Mexico City" },
];
console.log(monkey);
document.getElementById("test1").innerHTML = cities
  .map(
    (city) =>
      ` <button class='clutch'>
      ${city.title}
    </button>`
  )

  .join("");

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

// async function findAddress() {
//   const url1 =
//     "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
//     DOMSelectors.input1.value;
//   let x = await fetch(url1);
//   let data = await x.json();
//   return data;
// }

// async function init() {
//   let monkeys = await findAddress();
//   console.log(monkeys);
//   results.innerHTML = "";
//   if (monkeys.length > 0) {
//     monkeys.forEach((element) => {
//       results.innerHTML +=
//         "<div class='results'>" +
//         element.display_name +
//         "<br> Lat: " +
//         element.lat +
//         " Lng: " +
//         element.lon +
//         "</div>";
//     });
//   } else {
//     results.innerHTML = "<p style='color: red;'>Not found</p>";
//   }
// }

async function findAddress() {
  try {
    let city = DOMSelectors.input1.value;
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8819f20c9205070f8b81cb0884ce1ee5&units=imperial`
    );
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    DOMSelectors.results.innerHTML = "<p style='color: red;'>Not found</p>";
  }
}
async function init() {
  let monkeys = await findAddress();
  console.log(monkeys);
  let arr = Object.keys(monkeys);
  if (arr.length > 0) {
    arr.forEach(() => {
      results.innerHTML +=
        "<div class='results'>" +
        monkeys.name +
        "<br> Lat: " +
        monkeys.main.temp +
        "</div>";
    });
  } else {
    DOMSelectors.results.innerHTML = "<p style='color: red;'>Not found</p>";
  }
}
// console.log(Object.entries(monkeys));
// console.log(Object.keys(monkeys));
// console.log(Object.values(monkeys));

function clear() {
  DOMSelectors.input1.value = "";
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  init();
});

/* https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial 
https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric
https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=8819f20c9205070f8b81cb0884ce1ee5&units=metric
https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=8819f20c9205070f8b81cb0884ce1ee5&units=imperial  */
