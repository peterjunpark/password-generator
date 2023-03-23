// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charsets = {};
  var uniqueCharsets = 4;
  var concCharset = "";
  var passwordLength = 8;
  var passwordArr = [];

  var passwordInit = function () { //Get password length.
    passwordLength = prompt("Enter the length of your generated password.\n\nYour password must contain at least 8 and no more than 128 characters.",
    passwordLength);
    if (passwordLength === null)
      return; // Allow user to exit by clicking Cancel.
    else if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Your generated password must contain at least 8 and no more than 128 characters.\n\nEnter your desired password length."
      );
      passwordInit(); // Recurse if check fails.
    }
    while (passwordLength > 0) { // Initialize password char container with array length equal to password length.
      passwordArr.push("");
      passwordLength--;
    }
    getChars();
  };

  var getChars = function () {
    charsets = {
      "lowercase letters": "abcdefghijklmnopqrstuvwxyz",
      "uppercase letters": "ABCDEFGHIJIKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      "special characters": " \$\!\"\#%&'()*+,-./:;<=>?@[]^_`{|}~",
    }; // Available charsets unless rejected by user. Reset upon function call.

    if (
      confirm(
        "Select which character sets to include in your generated password using the following prompts."
      )
    ) {
      for (var prop in charsets) {
        // Loop through charsets object and print the name of each character set with each prompt.
        if (
          !confirm(
            `Would you like your generated password to include ${prop}?\n\nSelect "OK" to include them or "Cancel" to exclude them.`
          )
        )
          delete charsets[prop];
      }

      if (!Object.keys(charsets).length) {
        // Check if charsets object is empty.
        alert("You must select at least 1 character set.\n\nPlease try again.");
        getChars(); // Recurse if no charcter sets are selected.
      } else {
        uniqueCharsets = Object.keys(charsets).length;
        for (var prop in charsets) {
          concCharset += charsets[prop];
        }
        writeCriteria();
      }
    }
  };

  var writeCriteria = function () {
    var criteria = `Your generated password will contain ${passwordLength} characters and include the following character sets:\n`;

    for (var prop in charsets) {
      criteria += "\n - " + prop.charAt(0).toUpperCase() + prop.slice(1);
    }
    alert(criteria);
  };

  passwordInit(); // Main password generation logic starts.

  // Put a random char from each unique charset into the password.
  while (uniqueCharsets > 0) {
    var i = Math.floor(Math.random() * (passwordArr.length - 1));

    for (var prop in charsets) {
      if (passwordArr[i]) break;
      else {
        passwordArr[i] = charsets[prop].charAt(Math.floor(Math.random() * charsets[prop].length));
        uniqueCharsets--;
        delete charsets[prop];
      }
    }
  }

  console.log(passwordArr);

  for (var i = 0; i < passwordArr.length; i++) { // Add a random character from concCharset to each empty space.
    if (!passwordArr[i]) {
        passwordArr[i] += concCharset[Math.floor(Math.random() * concCharset.length)];
    }
  }

  return passwordArr.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
