// Write your solution here!
// Define a variable named 'cats' and set it to an array with initial values.
var cats = ["Milo", "Otis", "Garfield"];

// Append a cat's name to the end of the 'cats' array.
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepend a cat's name to the beginning of the 'cats' array.
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove the last cat's name from the 'cats' array.
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove the first cat's name from the 'cats' array.
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Create a new array by appending a cat's name to the end of the 'cats' array.
function appendCat(name) {
  return [...cats, name];
}

// Create a new array by prepending a cat's name to the beginning of the 'cats' array.
function prependCat(name) {
  return [name, ...cats];
}

// Create a new array by removing the last cat's name from the 'cats' array.
function removeLastCat() {
  return cats.slice(0, -1);
}

// Create a new array by removing the first cat's name from the 'cats' array.
function removeFirstCat() {
  return cats.slice(1);
}

