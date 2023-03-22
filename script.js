// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  numOfChars: 16,
  chars: {
    "lowercase letters": "abcdefghijklmnopqrstuvwxyz",
    "uppercase letters": "ABCDEFGHIJIKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    "special characters": " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  },

  getNumOfChars: function () {
    var desiredLength = prompt(
      "Enter the length of your generated password (must contain at least 8 and no more than 128 characters).",
      this.numOfChars
    );
    if (desiredLength > 8 && desiredLength < 128) {
      this.numOfChars = desiredLength;
      this.getChars();
    } else {
      alert(
        "Your generated password must contain at least 8 and no more than 128 characters.\n\nEnter your desired password length."
      );
      this.getNumOfChars(); // Recurse if user response is invalid
    }
  },

  getChars: function () {
    for (var key in this.chars) {
      if (!confirm(`Would you like your generated password to include ${key}?\n\nSelect 'OK' to include them or 'Cancel' to exclude them.`)) {
        this.chars[key] = ""
      }
    }
    this.printCriteria();
  },

  printCriteria: function () {
    var desiredCriteria = `Your generated password will include ${this.numOfChars} characters and include the following character sets:\n`;
    for (var key in this.chars) {
      if (this.chars[key] !== "") {
        desiredCriteria += "\n · " + key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter when displaying name of character set
      };
    }
    if (!confirm(desiredCriteria)) this.getNumOfChars();

    console.log(this.chars);
  },
};

function generatePassword() {
  passwordCriteria.getNumOfChars();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
