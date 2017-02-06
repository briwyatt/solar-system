var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");

var newPlanets=[]

//  Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".

planets.forEach(function(item, index){
  newPlanets += " " + item + ", ";
  console.log("newPlanets", newPlanets);
});

el.innerHTML = "newPlanets: " + newPlanets + "<br>";

// Use the map method to create a new array where the first letter of each planet is capitalized
function capitalize(item) {
  var newPlanet = item.charAt(0).toUpperCase() + item.substr(1) ;
    return newPlanet;
}
var upperNames = planets.map(capitalize);
el.innerHTML += "UpperCased: " + upperNames + "<br>";

// Use the filter method to create a new array that contains planets with the letter 'e'
var e = "e";
function checkforE(item){
  if (item.includes(e)){
  return true
  } 
};
el.innerHTML += (planets.filter(checkforE)) + " , <br>" 

// Use the reduce method to create a sentence from the words in the following array
var newArray;
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function myFunction() {
  newArray = words.join(" ");
  return newArray
  console.log(words.reduce(newArray));
};

el.innerHTML += words.reduce(myFunction);

