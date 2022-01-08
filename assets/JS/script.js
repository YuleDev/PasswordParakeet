// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/* begin some arrays for the password */

const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

/* end arrays for the password */

/* begin functions */

function generatePassword() {

  const charaLength = prompt("How many characters do you desire? Please pick a number between 8-128");
  if(charaLength=="") {
    alert("Input a number between 8-128. Please try again.")
    return "Your Secure Password";
  }
  if(charaLength < 8 || charaLength > 128) {
    alert("Input a number between 8-128. Please try again.")
    return "Your Secure Password";
  }

  var confirmLower = confirm("Would you like to include lower-case characters?")
  var confirmUpper = confirm("Would you like to include UPPER-CASE characters?")
  var confirmDigits = confirm("Woudl you like to include numerals? Such as 123")
  var confirmSymbols = confirm("Would you like to include symbols? Such as !@#")

  var totalPossibilities = [];
  if(confirmLower) {
    totalPossibilities = totalPossibilities.concat(lowerLetters)
  }
  if(confirmUpper) {
    totalPossibilities = totalPossibilities.concat(capitalLetters)
  }
  if(confirmDigits) {
    totalPossibilities = totalPossibilities.concat(digits)
  }
  if(confirmSymbols) {
    totalPossibilities = totalPossibilities.concat(symbols)
  }
  if(confirmLower=="" && confirmUpper=="" && confirmDigits=="" && confirmSymbols=="") {
    alert("You need some characters for a password silly!")
    return "Your Secure Password";
  }

  /* if all things false alert pickone  */

  var generatedPass = ""

  for(i=0; i<charaLength; i++){ 
    var randomIndex = Math.floor(Math.random() * totalPossibilities.length)
    var randomChar = totalPossibilities[randomIndex]
    generatedPass += randomChar;
    console.log(randomChar)
  }

  return generatedPass
}

/* end functions */

/* begin math */

var randomLower = lowerLetters[Math.floor(Math.random()*lowerLetters.length)];

var randomCapital = capitalLetters[Math.floor(Math.random()*capitalLetters.length)];

var randomDigits = digits[Math.floor(Math.random()*digits.length)];

var randomSymbols = symbols[Math.floor()*symbols.length];

/* end math */

/* ?make a for loop for grabbing however many of each item the user requests? */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
