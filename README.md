# Password Generator
![Last commit badge](https://img.shields.io/github/last-commit/qkr0wns/password-generator)

## Description
### What is this?
A password generator that accepts the user's desired password length and character sets to generate a random password satisfying those criteria.

This application was created based on the following acceptance criteria:
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The application:

![image](https://user-images.githubusercontent.com/115042610/227355681-012eb4d6-0c37-4bd8-bf2d-5463df94980d.png)


### How does it work?
The following is a brief outline of logic used to satisfy the acceptance criteria.
1. #### Receive the user's desired password length.
   1. Validate the user's input so that it is between 8 and 128 (inclusive).
   2. If validation fails, ask user to reinput.
   3. The user may click Cancel to exit.
2. #### Receive the user's desired character sets through a sequence of 4 boolean prompts.
   1. Validate that the user has chosen at least 1 character set.
   2. If validation fails, restart sequence.
   3. Print user's chosen password criteria.
3. #### Ensure that at least 1 of each chosen character set appears in the generated password.
   > Note that if we simply pull random characters from the user's desired character pool, we cannot guarantee that the generated password satisfies the user's criteria. If we aggregate the chosen character sets into a single pool and get random characters from this pool, there is a small chance that 0 characters from a particular set are used.   
   1. Separate the user's chosen character sets.
   2. Get 1 random character from each chosen character set and put them in random locations in the password.
   
![image](https://user-images.githubusercontent.com/115042610/227349459-ef65be54-3252-4519-86e4-f579135ab847.png)

   
4. #### Generate the rest of the password.
   1. Concatenate the chosen character sets into a single string.
   2. For each empty space in the password, add the random character.
   
![image](https://user-images.githubusercontent.com/115042610/227349837-ce524cda-9b7c-4ce9-9158-84eaf32543d1.png)

5. #### Print the generated password.
   
        



## Usage
To access the web app, go to [https://qkr0wns.github.io/password-generator/](https://qkr0wns.github.io/password-generator/).

Click *Generate Password* to see it in action.

To see the code, inspect the webpage in your browser and open the debugger. Alternatively, view script.js directly in GitHub, or clone the repository to view them in the code editor of your choice.


## Credits
- HTML, CSS, and starter code: UofT SCS Coding Bootcamp
- Logic to check if an object is empty: [freeCodeCamp article](https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/)

## License
See LICENSE in repo.
