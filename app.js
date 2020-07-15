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

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(human, dino) {
  return `${dino.species} is ${(dino.weight / human.weight + 1).toFixed(
    2
  )} times heavier than ${human.name}`;
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(human, dino) {
  return `${dino.species} is ${(dino.height / human.height + 1).toFixed(
    2
  )} times taller than ${human.name}`;
}

// helper method
function convertToInches(feet) {
  return feet * 12;
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(human, dino) {
  if (human.diet.toLowerCase() === dino.diet.toLowerCase()) {
    return `${human.name} and ${dino.species} have the same diet, which is ${human.diet}`;
  } else {
    return `${human.name}'s diet is ${human.diet} whereas ${dino.species}'s diet is ${dino.diet}`;
  }
}

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
    p.innerHTML = randomizeFact(dino, humanObj);
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
  // Use IIFE to get human data from form
  const humanObj = (function getData() {
    const name = document.querySelector("#name").value;
    const feet = document.querySelector("#feet").value;
    const inches = document.querySelector("#inches").value;
    const weight = document.querySelector("#weight").value;
    const diet = document.querySelector("#diet").value;

    return {
      name,
      height: convertToInches(feet) + inches,
      weight,
      diet,
    };
  })();
  const height = convertToInches(feet) + inches;
  createHumanTile(humanObj);
  fetchDino(humanObj);
  // Hide Form, Show Grid and new comparison button
  form.classList.add("display_none");
  toggleBtn.classList.remove("display_none");
  grid.classList.remove("display_none");
});

// For new comparison button
const toggleBtn = document.querySelector("#toggle");

toggleBtn.addEventListener("click", () => {
  form.classList.toggle("display_none");
  toggleBtn.classList.toggle("display_none");
  grid.classList.add("display_none");
  grid.innerHTML = "";
});

// Swap betweem form and grid
// function swapDom() {
//   return;
// }

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

// Generate Random Fact
function randomizeFact(dino, human) {
  if (dino.species === "Pigeon") {
    return dino.fact;
  }
  switch (Math.floor(Math.random() * 4 + 1)) {
    case 1:
      return compareWeight(human, dino);
    case 2:
      return compareHeight(human, dino);
    case 3:
      return compareDiet(human, dino);
    case 4:
      return dino.fact;
  }
}

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
