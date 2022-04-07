// get user's data
// get user's coordinates
async function getCoords() {
  pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return [pos.coords.latitude, pos.coords.longitude];
}
// get user's time
function userTime() {
  const now = new Date();
  return now.getHours();
}

function getMealTime() {
  const tod = userTime();
  return tod > 20
    ? "snacks"
    : tod > 16
    ? "dindin"
    : tod > 11
    ? "lunch"
    : "breakfast";
}

// helper functions
// check time of day

// build ads
// build ad 1
function buildAd1() {
  const mealTime = getMealTime();
  let content = document.querySelector(".ad1");
  let inner = document.createElement("p");
  inner.innerHTML = `Are you ready for some <span>${mealTime}</span>?`;
  content.append(inner);
}

// Build Ad 2
async function buildAd2(coordinates) {
  const coords = coordinates;
  const href =
    await `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`;
  let content = document.querySelector(".ad2");
  let inner = document.createElement("p");
  inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`;
  content.append(inner);
}

// event listeners

// On load, build ads:
window.onload = async () => {
    buildAd1();
  const coords = await getCoords();
  buildAd2(coords);
};
