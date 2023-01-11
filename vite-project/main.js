import "./style.css";
import { setupCounter } from "./counter.js";

const URL =
  "https://api.tomorrow.io/v4/locations?apikey=Y36J5oGiQiMrMwr0SnNAq4Zhqn038m6V";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.name;
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
    document.getElementById("api-response").textContent = "sorry";
  }
}

getData(URL);

setupCounter(document.querySelector("#counter"));
