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
      passwordInit(); // Print message and recurse if check fails.
    }
    while (passwordLength > 0) { // Initialize password char container with array length equal to password length.
      passwordArr.push("");
      passwordLength--;
    }
    getChars();
  };

  var getChars = function () {
    charsets = { // Available charsets unless rejected by user. Reset upon function call.
      "lowercase letters": "abcdefghijklmnopqrstuvwxyz",
      "uppercase letters": "ABCDEFGHIJIKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      "special characters": " \$\!\"\#%&'()*+,-./:;<=>?@[]^_`{|}~",
    };

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
        getChars(); // Print message and recurse if charsets is empty selected.
      } else {
        uniqueCharsets = Object.keys(charsets).length;
        for (var prop in charsets) { // Combine all available characters for ease of access.
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

  // Main password generation logic starts.
  passwordInit(); 
  // Insurance: at least 1 one random char from each set will ALWAYS be included in the password in random places.
  while (uniqueCharsets > 0) {
    var i = Math.floor(Math.random() * (passwordArr.length - 1));
    for (var prop in charsets) {
      // Make sure chars that have already been placed are not overwritten.
      if (passwordArr[i]) break;
      else {
        passwordArr[i] = charsets[prop].charAt(Math.floor(Math.random() * charsets[prop].length));
        uniqueCharsets--;
        delete charsets[prop];
      }
    }
  }

  for (var i = 0; i < passwordArr.length; i++) { // Fill out rest of the password.
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
