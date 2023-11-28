"use strict";

// Selecting container
const container = document.getElementById("outputContainer");

// Selecting input field
const userInputField = document.getElementById("userInput");

const submitButton = document.querySelector("button");

function displayOutput(message) {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = message;
  container.appendChild(newParagraph);
}

submitButton.addEventListener("click", function () {
  
    // Check if the input is empty.
    const userInput = userInputField.value
    if(userInput.trim() === ''){
        displayOutput('Please enter a value.')
    }


    // See if the user input the number 10
    if(parseInt(userInput) === 10){
        displayOutput('You entered the number 10!');
    }else if (userInput.toLowerCase() === 'hello'){
        displayOutput('Hello to you, too!');
    }else {
        displayOutput('You entered: ' + userInput + '.')
    }
});
