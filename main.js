var num = parseInt(prompt("I'm guessing of a number between 1 and 100"));
// ask for a number they guess between 1 and 100
var randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
// get a random random number

if (num === randomNum) {
  alert("congrats! you got it right " + randomNum);
} else if  (num <= randomNum) {
  alert("too low, try again");
} else if (num >= randomNum) {
  alert("too high, try again.")
}
alert("the number was " + randomNum );
