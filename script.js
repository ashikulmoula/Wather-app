const input = document.getElementById("city-name");
const search = document.getElementById("search-button");
const llocation = document.getElementById("llocation");
const time = document.getElementById("time");
const temp = document.getElementById("temp");
const latit = document.getElementById("latit");
const longit = document.getElementById("longit");
const daynight = document.getElementById("daynight");

async function getWather(cityName) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=383d63f9a8d14b2392e110911240301&q=${cityName}&aqi=yes`
  );
  return await data.json();
}

search.addEventListener("click", async () => {
  const city = input.value;
  const result = await getWather(city);
  llocation.innerHTML = `${result.location.name}, ${result.location.region} , ${result.location.country}`;
  time.innerHTML = ` ${result.location.localtime}`;
  temp.innerHTML = ` ${result.current.temp_c}&deg;c`;
  latit.innerHTML = `${result.location.lat}`;
  longit.innerHTML = `${result.location.lon}`;
  daynight.innerHTML = `${!result.current.is_day ? "Night" : "Day"}`;
});
