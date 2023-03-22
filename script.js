// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  chars:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJIKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  includeChars: {
    "lowercase letters": true,
    "uppercase letters": true,
    "numbers": true,
    "special characters": true,
  },
  numOfChars: 16,

  getLength: function () {
    var lengthInput = prompt(
      "Enter the length of your generated password (must contain at least 8 and no more than 128 characters).",
      this.numOfChars
    );
    if (lengthInput > 8 && lengthInput < 128) {
      this.numOfChars = lengthInput;
      this.getChars();
    } else {
      alert(
        "Your generated password must contain at least 8 and no more than 128 characters.\n\nEnter your desired password length."
      );
      this.getLength(); // recurse if user response is invalid
    }
  },

  getChars: function () {
    var charsPrompt = "Would you like your generated password to include";
    var charsPromptInstruct =
      "\n\nSelect 'OK' to include them or 'Cancel' to exclude them.";
    this.includeChars["lowercase letters"] = confirm(
      `${charsPrompt} lowercase letters?${charsPromptInstruct}`
    );
    this.includeChars["uppercase letters"] = confirm(
      `${charsPrompt} uppercase letters?${charsPromptInstruct}`
    );
    this.includeChars["numbers"] = confirm(
      `${charsPrompt} numbers?${charsPromptInstruct}`
    );
    this.includeChars["special characters"] = confirm(
      `${charsPrompt} special characters?${charsPromptInstruct}`
    );
    console.log(this.includeChars);
    // this.printCriteria();
  },

  // printCriteria: function() {
  //   var criteria = `Your generated password will include ${this.numOfChars} characters and consist of the following character sets:`
  //   for (v of passwordCriteria) {
  //     if (v) {
  //       criteria += `\n`
  //     }
  //   }
  // }
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
