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
let humanData = (function getData() {
  const listOfData = "data in the form";

  // return data as an object
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
    const tile = "something";
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
  removeForm();
  addTile("dino array here");
});

// Steps from me
// Swap betweem form and grid
function swapDom() {
  return;
}

// Fetching Data from json file
