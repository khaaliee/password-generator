let password = [""]
let charactersLeft = -1
const passwordLength = parseInt(prompt("How long password should be?"));

if (passwordLength < 5) {
console.log("Password is too short. Minimum is 5 signs")
alert("Too short")
} else {
charactersLeft = passwordLength
console.log("Success, length of password will be:" + " " + `${passwordLength}`)
}

let updateCharactersLeft = (numOfCharacters) => {
if (numOfCharacters < 0 || numOfCharacters > charactersLeft) {
const alert = "Error. Number of signs is too high";
console.log(alert);
} else {
charactersLeft -= numOfCharacters
console.log("Number of signs left:", charactersLeft)
}
}

let lowercaseLetters = parseInt(prompt("How many lowercase letters should it has?"));
updateCharactersLeft(lowercaseLetters);

let uppercaseLetters = parseInt(prompt("How many uppercase letters should it has?"));
updateCharactersLeft(uppercaseLetters);

let specialCharacters = parseInt(prompt("How many special characters should it has?"));
updateCharactersLeft(specialCharacters);
let digits = parseInt(prompt("How many digits should it has?"));
updateCharactersLeft(digits);

if (charactersLeft > 0) {
console.log("Not every signs were used to generate password. It will be fill wwith random signs and letters.")
// ex with lowerletters 
lowercaseLetters += charactersLeft
}

console.log("Length:" + " " + passwordLength);
console.log("Lowercase letters:" + " " + lowercaseLetters);
console.log("Uppercase letters:" + " " + uppercaseLetters);
console.log("Special characters:" + " " + specialCharacters);
console.log("digits:" + " " + digits);

for(let i = 0; i < passwordLength; i++) {
let lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","t","u","w","y","z"]
if(lowercaseLetters > 0) {
password += lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)]
lowercaseLetters -= 1
}
let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H"]
if(uppercaseLetters > 0) {
password += uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)]
uppercaseLetters -= 1
}
let specialCharactersArray = ["!","#","^","*","&",")","$", "@", "+", "="]
if(specialCharacters > 0) {
password += specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)]
specialCharacters -= 1
}
let digitsArray = ["1","2","3","4","5","6","7","8","9","0"]
if(digits > 0) {
password += digitsArray[Math.floor(Math.random()*digitsArray.length)]
digits -= 1
}
}
console.log("Password:" + password)
