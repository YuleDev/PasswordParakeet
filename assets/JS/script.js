// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* begin some arrays for the password */

/* CONST OR LET ASK ANDRES */

let lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.getElementById("password").innerHTML = lowerLetters;

let capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

/* end arrays for the password */

/* Begin code for user input to grab randon data from each array */

/* a prompt should appear that asks the user how many lower case letter they want
then another for how many uppercase letters they want
then another for how many numerals
then another for how many special characters
finally the code should randomly grab items from the corresponding arrays in the quantity specified and display it */

/* end code for random array info grab */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
