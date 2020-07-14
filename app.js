const form = document.querySelector("#dino-compare");
const grid = document.querySelector("#grid");
const button = document.querySelector("#btn");

// Create Dino Constructor
function Dino() {
  this.constructor = "constructor";
}
// Create Dino Objects
dino = new Dino();

// Create Human Object
human = new Dino();

// Use IIFE to get human data from form
const humanObj = (function getData() {
  const name = document.querySelector("#name").value;
  const feet = document.querySelector("#feet").value;
  const inches = document.querySelector("#inches").value;
  const weight = document.querySelector("#weight").value;
  const diet = document.querySelector("#diet").value;

  return {
    name,
    feet,
    inches,
    weight,
    diet,
  };
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(obj1, obj2) {
  return `${obj2.name} is ${obj2.weight / obj1.weight}x heavier than ${
    obj1.name
  }`;
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(obj1, obj2) {
  return `${obj2.name} is ${obj2.height / obj1.height}x taller than ${
    obj1.name
  }`;
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function convertToInches(feet) {
  return feet * 12;
}

// Generate Tiles for each Dino in Array
function generateTile(Array) {
  Array.forEach((dino) => {
    // const tile = "something";
    console.log("generating tile for " + dino.species.toLowerCase());
    const div = document.createElement("div");
    div.classList.add("grid-item");
    const img = document.createElement("img");
    img.setAttribute("src", `./images/${dino.species.toLowerCase()}.png`);
    const p = document.createElement("p");
    p.innerHTML = dino.fact;
    div.appendChild(img);
    div.appendChild(p);
    grid.appendChild(div);
  });
}
// Add tiles to DOM
function addTile(dino) {
  return;
}

// Remove form from screen
function removeForm() {
  return;
}

// On button click, prepare and display infographic
button.addEventListener("click", () => {
  //   Remove Form
  // Add Tiles
  //   e.preventDefault();
  const name = document.querySelector("#name").value;
  const feet = document.querySelector("#feet").value;
  const inches = document.querySelector("#inches").value;
  const weight = document.querySelector("#weight").value;
  const diet = document.querySelector("#diet").value;
  console.log(name, feet, inches, weight, diet);
  createHumanTile({ name, feet, inches, weight, diet });
  fetchDino();
  form.classList.add("display_none");
  toggleBtn.classList.remove("display_none");
  grid.classList.remove("display_none");
});

const toggleBtn = document.querySelector("#toggle");

toggleBtn.addEventListener("click", () => {
  form.classList.toggle("display_none");
  toggleBtn.classList.toggle("display_none");
  grid.classList.add("display_none");
  grid.innerHTML = "";
});

// Steps from me
// Swap betweem form and grid
function swapDom() {
  return;
}

// Fetching Data from json file
async function fetchDino() {
  try {
    // const res = await fetch("./dino.json");
    // const data = res.json();
    // console.log(data);
    // console.log(data.Dinos);
    fetch("./dino.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log(data.Dinos);
        // data.Dinos.forEach((dino) => {
        //   console.log(dino.species);
        // });

        generateTile(data.Dinos);
      });
  } catch (error) {
    console.log(error);
  }
}

// Create Human Tile
function createHumanTile(obj) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  img.setAttribute("src", `./images/human.png`);
  h3.innerHTML = obj.name;
  div.appendChild(img);
  div.appendChild(h3);
  grid.appendChild(div);
}

// On Load
// fetchDino();
