import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";const URL = "https://api.quotable.io/random";
let pokemon = "gengar";
const pokemons = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log("ez");
    }
  } catch (error) {
    console.log(error);
    console.log("No Bueno");
  }
}
getData(URL);
setupCounter(document.querySelector("#counter"));
