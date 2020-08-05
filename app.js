const form = document.querySelector("#dino-compare");
const grid = document.querySelector("#grid");
const button = document.querySelector("#btn");
// For new comparison button
const toggleBtn = document.querySelector("#toggle");

// Create Human Class
function Human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

// Dinasour Class
function Dinasaur(species, weight, height, diet, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.fact = fact;

  // Human.call(this, species, weight, height, diet);
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dinasaur.prototype.compareWeight = function (human) {
  return `${this.species} is ${(this.weight / human.weight + 1).toFixed(
    2
  )} times heavier than ${human.name}`;
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dinasaur.prototype.compareHeight = function (human) {
  return `${this.species} is ${(this.height / human.height + 1).toFixed(
    2
  )} times taller than ${human.name}`;
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dinasaur.prototype.compareDiet = function (human) {
  if (human.diet.toLowerCase() === this.diet.toLowerCase()) {
    return `${human.name} and ${this.species} have the same diet, which is ${human.diet}`;
  } else {
    return `${human.name}'s diet is ${human.diet} whereas ${this.species}'s diet is ${this.diet}`;
  }
};

// Generate Tiles for each Dino in Array
function generateTile(Array, humanObj) {
  Array.forEach((dino) => {
    // const tile = "something";
    // console.log("generating tile for " + dino.species.toLowerCase());
    const div = document.createElement("div");
    div.classList.add("grid-item");
    const img = document.createElement("img");
    img.setAttribute("src", `./images/${dino.species.toLowerCase()}.png`);
    const p = document.createElement("p");
    // p.innerHTML = dino.fact;
    const dinoObj = new Dinasaur(
      dino.species,
      dino.weight,
      dino.height,
      dino.diet,
      dino.fact
    );
    p.innerHTML = randomizeFact(dinoObj, humanObj);
    div.appendChild(img);
    div.appendChild(p);
    grid.appendChild(div);
  });
}

// Create Human Tile
function createHumanTile(obj) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  img.setAttribute("src", `./images/human.png`);
  h3.textContent = obj.name;
  div.appendChild(img);
  div.appendChild(h3);
  grid.appendChild(div);
}

// Generate Random Fact
function randomizeFact(dino, human) {
  if (dino.species === "Pigeon") {
    return dino.fact;
  }
  switch (Math.floor(Math.random() * 4 + 1)) {
    case 1:
      return dino.compareWeight(human);
    case 2:
      return dino.compareHeight(human);
    case 3:
      return dino.compareDiet(human);
    case 4:
      return dino.fact;
  }
}

// API Calls
// Fetching Data from json file
async function fetchDino(humanObj) {
  try {
    fetch("./dino.json")
      .then((res) => res.json())
      .then((data) => {
        // Passing in array of Dino data into generateTile function
        generateTile(data.Dinos, humanObj);
      });
  } catch (error) {
    console.log(error);
  }
}

// Add Event Listeners
// On button click, prepare and display infographic
button.addEventListener("click", () => {
  // Use IIFE to get human data from form
  const humanObj = (function getData() {
    const name = document.querySelector("#name").value;
    const feet = document.querySelector("#feet").value;
    const inches = document.querySelector("#inches").value;
    const weight = document.querySelector("#weight").value;
    const diet = document.querySelector("#diet").value;
    // '+' converts string into integer
    const height = +feet * 12 + +inches;

    return new Human(name, weight, height, diet);
  })();
  createHumanTile(humanObj);
  fetchDino(humanObj);
  // Hide Form, Show Grid and new comparison button
  form.classList.add("display_none");
  toggleBtn.classList.remove("display_none");
  grid.classList.remove("display_none");
});

toggleBtn.addEventListener("click", () => {
  form.classList.toggle("display_none");
  toggleBtn.classList.toggle("display_none");
  grid.classList.add("display_none");
  grid.innerHTML = "";
});

// On Load
// fetchDino();

// Improvement:
// Create IIFE to encapsulate human form data and return a human object
// There should be at least 1 class/function for creating new objects. There should be 9 objects created.

// Iterate through objects to create tiles with species, image, and fact that are appended to DOM. Conditionally display appropriate information for Human, Bird and Dinosaurs.

// Randomize the order of the tiles while keeping the human in the middle.
// Validate the form data to ensure the data is acceptable and complete.
// Move the tile colors from CSS to JS for more control.
// Rewrite the project to use constructor functions, factory functions, the module pattern, and revealing module pattern
// Allow the user to select different units for the numbers and update the methods to account for this.
