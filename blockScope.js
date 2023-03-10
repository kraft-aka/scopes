// block scope
const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline())

// variables declared in global scope can be accessed with functions
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());

// variables declared within function body only accessed wwithin the scope of the context of function
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight'
  console.log(lightWaves)
}

console.log(logVisibleLightWaves())

console.log(lightWaves)