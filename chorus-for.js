/*const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");*/
// function isThisWorking(input) {
//   console.log("as an argument.");

// }

// isThisWorking(3);
// console.log()
;
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
function helloCat(cty) {
  return "Hello " + cty(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));



// var favoriteMovie = function displayFavorite(movieName) {
//    console.log("My favorite movie is " + movieName);
// };

// // Function declaration that has two parameters: a function for displaying
// // a message, along with a name of a movie
// // function movies(messageFunction, name) {
// //   messageFunction(name);
// // }
// console.log(favoriteMovie);