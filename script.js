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

    let generatedPassword = [];

    let specialCharacterString = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
    let specialCharacterArray = specialCharacterString.split("");

    
}