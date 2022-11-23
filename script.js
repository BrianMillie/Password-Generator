// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
//set the length defaulting to start if not in criteria

var size = prompt('This is the random password generator, please confirm your desired password length \
between 10 and 64 characters');
while ((size < 10)||(size > 64)){
size = prompt('This is the random password generator, please confirm your desired password length \
between 10 and 64 characters');
//select required value types
}
//Convert user input text to number
var num1 = parseInt(size);
var LC = confirm('Press OK for Lower case characters or cancel for none?');
var UC = confirm('Press OK for Upper case characters or cancel for none?');
var Numbers = confirm('Press OK for Numeric case characters or cancel for none?');
var SC = confirm('Press OK for Special characters or cancel for none?');
// ! If all criterias are set to false run 2nd phase again
if ((!LC && !UC) && (!Numbers && !SC)){
var wrongcritria = alert('Criteria needs an Upper Case, Lower Case, Numeric or Special Charactor try again');
LC = confirm('Press OK for Lower case characters or cancel for none?');
UC = confirm('Press OK for Upper case characters or cancel for none?');
Numbers = confirm('Press OK for Numeric case characters or cancel for none?');
SC = confirm('Press OK for Special characters or cancel for none?');
}

//set i as number of characters (stopping at selected choice is true) loop through the random generator function in order of type skipping ones not selected by user
var j = 0
var pass = ''
console.log(size, LC, UC, Numbers, SC);

for (var i = 0; i < 65; i++){
if (LC){
  if(j === num1){
  console.log(size)
  console.log(j)
  break;}
else{
getRandom(lowerCasedCharacters);
pass = pass + getRandom(lowerCasedCharacters)
j = j + 1
}
}
if (UC){
  if(j === num1){
  console.log(size)
  console.log(j)
  break;}
else{
getRandom(upperCasedCharacters);
pass = pass + getRandom(upperCasedCharacters)
j = j + 1
  }
}
if (Numbers){
  if(j === num1){
  console.log(size)
  console.log(j)
  break;}
else{
getRandom(numericCharacters);
pass = pass + getRandom(numericCharacters)
j = j + 1
  }

if (SC){
  if(j === num1){
  console.log(size)
  console.log(j)
  break;}
else{
getRandom(specialCharacters);
pass = pass + getRandom(specialCharacters)
j = j + 1
  }
}
}
}
return(pass);
}
generatePassword()
// Function for getting a random element from an array
function getRandom(arr) {

var item = arr[Math.floor(Math.random()* arr.length)];
return (item);
}

// Function to generate password with user input
function generatePassword() {

var password = getPasswordOptions();
return(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Final Password " + password)
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);