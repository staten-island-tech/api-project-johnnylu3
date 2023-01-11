const URL = "https://api.weather.gov/points/39.7456,-97.0892";

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

setupCounter(document.querySelector("#counter"));
