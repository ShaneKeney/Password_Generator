document.getElementById("generate-password").onclick = generatePassword;

function generatePassword() {
    let numberCheck = document.getElementById("numericCheckbox").checked;
    let specialCharCheck = document.getElementById("specialCharCheckbox").checked;
    let lowercaseCheck = document.getElementById("lowercaseCheckbox").checked;
    let uppercaseCheck = document.getElementById("uppercaseCheckbox").checked;

    if( !(numberCheck || specialCharCheck || lowercaseCheck || uppercaseCheck)) {
        alert("Please select at least one of the password options!");
        return;
    }

    while(1) {
        var numberOfCharacters = prompt("Input desired number of characters in password! \n MUST BE BETWEEN 8 AND 128");
        
        if(parseInt(numberOfCharacters) >= 8 && parseInt(numberOfCharacters) <= 128) { //is a valid entry
            //don't need to do anything just need to exit loop
            break;
        } else if(numberOfCharacters === null) { //pressed cancel
            break;
        } else { //invalid entry
            console.log(numberOfCharacters);
            alert("Invalid entry.  Please select a number between 8 and 128!")
        }
    }

    let options = [];
    numberCheck && options.push("number");
    specialCharCheck && options.push("special");
    lowercaseCheck && options.push("lowercase");
    uppercaseCheck && options.push("uppercase");

    let generatedPassword = [];
    let specialBool, lowercaseBool, uppercaseBool, numberBool;

    let specialCharacterString = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
    let specialCharacterArray = specialCharacterString.split("");
    let lettersArray = "qwertyuiopasdfghjklzxcvbnm".split("");
    let numbersArray = "0123456789".split("");

    let min = 0;
    let max = options.length - 1;
    for(let i=0; i<parseInt(numberOfCharacters); i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);

        switch(options[random]) {
            case("number"):
                let randomNumber = Math.floor(Math.random() * ((numbersArray.length - 1)  - min + 1) + min);
                generatedPassword.push(numbersArray[randomNumber]);
                numberBool = true;
                break;
            case("special"):
                let randomSpecial = Math.floor(Math.random() * ((specialCharacterArray.length - 1)  - min + 1) + min);
                generatedPassword.push(specialCharacterArray[randomSpecial]);
                specialBool = true
                break;
            case("lowercase"):
                let randomLetter = Math.floor(Math.random() * ((lettersArray.length - 1)  - min + 1) + min);
                generatedPassword.push(lettersArray[randomLetter].toLowerCase());
                lowercaseBool = true;
                break;
            case("uppercase"):
                let randomLetterUpper = Math.floor(Math.random() * ((lettersArray.length - 1)  - min + 1) + min);
                generatedPassword.push(lettersArray[randomLetterUpper].toUpperCase());
                uppercaseBool = true;
                break;
            default:
        }
    }

    let indexToAdd, itemToAdd;
    if((specialBool && specialCharCheck) === false) {
        indexToAdd = Math.floor(Math.random() * ((numberOfCharacters - 1)  - min + 1) + min);
        itemToAdd = Math.floor(Math.random() * ((specialCharacterArray.length - 1)  - min + 1) + min);

        generatedPassword[indexToAdd] = specialCharacterArray[itemToAdd];
    }

    if((uppercaseBool && uppercaseCheck) === false) {
        indexToAdd = Math.floor(Math.random() * ((numberOfCharacters - 1)  - min + 1) + min);
        itemToAdd = Math.floor(Math.random() * ((lettersArray.length - 1)  - min + 1) + min);

        generatedPassword[indexToAdd] = lettersArray[itemToAdd].toUpperCase();
    }

    if((lowercaseBool && lowercaseCheck) === false) {
        indexToAdd = Math.floor(Math.random() * ((numberOfCharacters - 1)  - min + 1) + min);
        itemToAdd = Math.floor(Math.random() * ((lettersArray.length - 1)  - min + 1) + min);

        generatedPassword[indexToAdd] = lettersArray[itemToAdd].toLowerCase();
    }

    if((numberBool && numberCheck) === false) {
        indexToAdd = Math.floor(Math.random() * ((numberOfCharacters - 1)  - min + 1) + min);
        itemToAdd = Math.floor(Math.random() * ((numbersArray.length - 1)  - min + 1) + min);

        generatedPassword[indexToAdd] = numbersArray[itemToAdd];
    }

    console.log(generatedPassword.join(""));
}