// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  numOfChars: 16,
  chars: {
    "lowercase letters": "",
    "uppercase letters": "",
    numbers: "",
    "special characters": "",
  },

  getNumOfChars: function () {
    var desiredLength = prompt(
      "Enter the length of your generated password.\n\nYour password must contain at least 8 and no more than 128 characters.",
      this.numOfChars
    );
    if (desiredLength >= 8 && desiredLength <= 128) {
      this.numOfChars = desiredLength;
      this.getCharSets();
    } else if (desiredLength !== null) {
      alert(
        "Your generated password must contain at least 8 and no more than 128 characters.\n\nEnter your desired password length."
      );
      this.getNumOfChars(); // Recurse if user response is invalid
    }
  },

  getCharSets: function () {
    //Assign charsets here to add back the string of characters if user clicks "Generate Password" without refreshing the page
    this.chars["lowercase letters"] = "abcdefghijklmnopqrstuvwxyz";
    this.chars["uppercase letters"] = "ABCDEFGHIJIKLMNOPQRSTUVWXYZ";
    this.chars["numbers"] = "0123456789";
    this.chars["special characters"] = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    if (
      confirm(
        "Select which character sets to include in your generate password using the following prompts."
      )
    ) {
      for (var charset in this.chars) {
        if (
          !confirm(
            `Would you like your generated password to include ${charset}?\n\nSelect 'OK' to include them or 'Cancel' to exclude them.`
          )
        ) {
          this.chars[charset] = "";
        }
      }
      this.validateCriteria();
    } else {
      this.getNumOfChars();
    }
  },

  validateCriteria: function () {
    var desiredCriteria = "";
    for (var charset in this.chars) {
      if (this.chars[charset]) {
        // Checks that at least 1 character set is selected
        desiredCriteria +=
          "\n · " + charset.charAt(0).toUpperCase() + charset.slice(1); // Capitalize first letter when displaying name of character set
      }
    }
    if (!desiredCriteria) {
      alert("You must select at least 1 character set.\n\nPlease try again.");
      this.getChars();
    } else if (!desiredCriteria) this.getChars();
    else {
      alert(
        `Your generated password will include ${this.numOfChars} characters and include the following character sets:\n${desiredCriteria}`
      );
    }
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
