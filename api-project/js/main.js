import "../styles/style.css";
import "./dom";
import { DOMSelectors } from "./dom";
const getIcon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

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

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

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
      DOMSelectors.mom.textContent = `${Math.round(data.main.temp)}°`;
      DOMSelectors.mom1.textContent = `${Math.round(data.main.feels_like)}°`;
      DOMSelectors.mom2.textContent = `${Math.round(data.main.humidity)}%`;
      DOMSelectors.mom3.textContent = `${Math.round(data.wind.speed)}km/h`;
      DOMSelectors.val.textContent = data.weather[0].main;
      DOMSelectors.hunt.textContent = `${data.name}, ${data.sys.country}`;
      DOMSelectors.ge.src = getIcon(data.weather[0].icon);

      return data;
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    // DOMSelectors.results.innerHTML = "<p style='color: red;'>Not found</p>";
  }
}
async function init() {
  let monkeys = await findAddress();
  console.log(monkeys);
}

function clear() {
  DOMSelectors.input1.value = "";
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  init();
});

let units = DOMSelectors.get.addEventListener("click", function () {});
DOMSelectors.pop.addEventListener("click", function () {});
document.querySelectorAll(".clutch").forEach((we) => {
  cities.forEach((wasd) => {
    wasd.title;
    async function wasd41(units) {
      try {
        if (we.textContent.includes(wasd.title)) {
          let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${wasd.title}&appid=8819f20c9205070f8b81cb0884ce1ee5&units=${units}`
          );
          if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw error(response);
          } else {
            let data = await response.json();
            DOMSelectors.mom.textContent = `${Math.round(data.main.temp)}°`;
            DOMSelectors.mom1.textContent = `${Math.round(
              data.main.feels_like
            )}°`;
            DOMSelectors.mom2.textContent = `${Math.round(
              data.main.humidity
            )}%`;
            DOMSelectors.mom3.textContent = `${Math.round(
              data.wind.speed
            )}km/h`;
            DOMSelectors.val.textContent = data.weather[0].main;
            DOMSelectors.hunt.textContent = `${data.name}, ${data.sys.country}`;
            DOMSelectors.ge.src = getIcon(data.weather[0].icon);

            return data;
          }
        } else {
        }
      } catch (error) {
        console.log(error);
        console.log("sad");
        // DOMSelectors.results.innerHTML = "<p style='color: red;'>Not found</p>";
      }
    }
    async function init1() {
      let monkeys = await wasd41();
      console.log(monkeys);
    }
    we.addEventListener("click", function () {
      init1();
    });
  });
});
DOMSelectors.get.addEventListener("click", function () {});
DOMSelectors.pop.addEventListener("click", function () {});
if (classlist contains imperial){
  make sure 
}
{}
DOMSelectors.cold.addEventListener("click", function () {
  if (DOMSelectors.display.classList.contains("imperial")) {
  } else {
    DOMSelectors.display.classList.remove("imperial", "metric");
    DOMSelectors.display.classList.add("imperial");
    function w(){};
  }
});