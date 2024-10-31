const slider = document.getElementById("input");

input.addEventListener("input", function () {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #CC5FFF ${value}%, #ddd ${value}%)`;
});

const length = parseInt(slider.value);
console.log(length);
// for getting all the id's for dom manuplation
const includeUpperCase = document.getElementById("uppercase");
const includeLowerCase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const button = document.getElementById("btn");
// define all the characters
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "@#$%^&*()";

// function for generate a password

function generatepassword() {
    let setPassword = "";
    if (includeUpperCase.checked) setPassword += upperCase;
    if (includeLowerCase.checked) setPassword += lowerCase;
    if (includeNumbers.checked) setPassword += numbers;
    if (includeSymbols.checked) setPassword += symbols;
    if (setPassword == "" || input.value == 0) {
        alert("please select atlest one of the chracter or please select the length grentertheen 0");
    }

    let password = ""

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * setPassword.length);
        password += setPassword[randomIndex];
    }
    const result = document.getElementById("result").innerText = password;
}
button.addEventListener('click', generatepassword)

