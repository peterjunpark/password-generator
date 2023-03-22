// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  chars: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  includedChars: [true, true, true, true],
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
      this.getLength();
    }
  },

  getChars: function () {
    var charsPrompt = "Would you like your generated password to include";
    var charsPromptInstruct = "\n\nSelect 'OK' to include them or 'Cancel' to exclude them."
    this.includedChars[0] = confirm(`${charsPrompt} lowercase letters?${charsPromptInstruct}`);
    this.includedChars[1] = confirm(`${charsPrompt} uppercase letters?${charsPromptInstruct}`);
    this.includedChars[2] = confirm(`${charsPrompt} numbers?${charsPromptInstruct}`);
    this.includedChars[3] = confirm(`${charsPrompt} special characters?${charsPromptInstruct}`);
    console.log(this.includedChars);
  },
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
