// Assignment Code
var generateBtn = document.querySelector("#generate");

var getLength = function () {
  var numOfChars = prompt("Enter the length of your generated password.\n\nYour password must contain at least 8 and no more than 128 characters.", 8);

  if (numOfChars >= 8 && numOfChars <= 128) {
    return numOfChars;
  } else if (numOfChars !== null) {
    // Validate desired password length (unless user clicked Cancel).
    alert("Your generated password must contain at least 8 and no more than 128 characters.\n\nEnter your desired password length.");
    getLength(); // Recurse if desired password length fails validation.
  } // Exit if user clicked Cancel (numOfChars === null).
};

var getChars = function () {
  chars = {
    "lowercase letters": "abcdefghijklmnopqrstuvwxyz",
    "uppercase letters": "ABCDEFGHIJIKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    "special characters": " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  }; // Available chars. Reset upon function call.

  if (confirm("Select which character sets to include in your generated password using the following prompts.")) {
    for (var prop in chars) { // Loop through chars object and print the name of each character set with each prompt.
      if (
        !confirm(`Would you like your generated password to include ${prop}?\n\nSelect "OK" to include them or "Cancel" to exclude them.`)
      ) {
        delete chars[prop];
      }
    }

    if (!Object.keys(chars).length) { // Check if chars object is empty.
      alert("You must select at least 1 character set.\n\nPlease try again.");
      getChars(); // Recurse if no charcter sets are selected.
    } else return chars;
  }
};

function generatePassword() {
  console.log(getLength());
  console.log(getChars());
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
