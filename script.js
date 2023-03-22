// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  chars:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJIKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  includeChars: {
    "lowercase letters": true,
    "uppercase letters": true,
    numbers: true,
    "special characters": true,
  },
  numOfChars: 16,

  getLength: function () {
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
      this.getLength(); // recurse if user response is invalid
    }
  },

  getChars: function () {
    for (var key in this.includeChars) {
      this.includeChars[key] = confirm(
        `Would you like your generated password to include ${key}?\n\nSelect 'OK' to include them or 'Cancel' to exclude them.`
      );
    }
    this.printCriteria();
  },

  printCriteria: function() {
    var desiredCriteria = `Your generated password will include ${this.numOfChars} characters and consist of the following character sets:\n`
    for (var key in this.includeChars) {
      if (this.includeChars[key]) {
        desiredCriteria +=  "\n · " + key.charAt(0).toUpperCase() + key.slice(1);
      }
    }
    if (!confirm(desiredCriteria)) this.getLength();
  }
};

function generatePassword() {
  passwordCriteria.getLength();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
