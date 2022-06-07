// fetch api example
const url = "http://api.open-notify.org/astros.json";
const btn = document.getElementById("getastros");
const overlayEl = document.querySelector(".overlay");

// what we want from data
const astros = [];
const crafts = [];

// using fetch API
const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => handleData(data))
    .catch((err) => displayOverlay(`${err}: Content is loaded over HTTPS.\nPlease clone the repo and test the API on your local server!`));
};

const handleData = (data) => {
  for (let i = 0; i < data.people.length; i++) {
    astros.push(data.people[i].name);
    crafts.push(data.people[i].craft);
  }
  drawHTML(astros, crafts);
};
// Draw astronauts
const drawHTML = (astros, craft) => {
  // Get images of astronauts
  const urls = [
    "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e014991.jpg",
    "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e014993.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c1/Ivan_Vagner_%28Jsc2020e014992%29.jpg"
  ];
  // make a card
  let template = ``;
  for (let i = 0; i < astros.length; i++) {
    template += `
   <div class="astro">
      <h3 id="info">${astros[i]}: <span class="craft">${craft[i]}</span></h3>
      <img src="${urls[i]}" alt="astro">
    </div>
   `;
  }
  document.querySelector(".astros").innerHTML = template;
};

const displayOverlay = (text) => {
  overlayEl.style.display = "flex";
  overlayEl.textContent = `${text}`;
};
const removeOverlay = () => {
  overlayEl.style.display = "none";
};
// events
btn.addEventListener("click", fetchData);
overlayEl.addEventListener("click", removeOverlay);
