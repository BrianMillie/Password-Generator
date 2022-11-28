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
  var size = prompt('This is the random password generator, please confirm your desired password length\
  between 10 and 64 characters');
  var num1 = parseInt(size);
  while ((num1 < 10)||(num1 > 64)){
  size = prompt('This is the random password generator, please confirm your desired password length again\
  between 10 and 64 characters');
  num1 = parseInt(size);
  //select required value types
  }
  //Convert user input text to number
  num1 = parseInt(size);
  // confirm other input
  var LC = confirm('Press OK for Lower case characters or cancel for none?');
  var UC = confirm('Press OK for Upper case characters or cancel for none?');
  var Numbers = confirm('Press OK for Numeric case characters or cancel for none?');
  var SC = confirm('Press OK for Special characters or cancel for none?');
  // ! If all criterias are set to false run 2nd phase again
  while ((!LC)&&(!UC)&&(!Numbers)&&(!SC)){
  LC = confirm('Unique criteria must be selected. Press OK for Lower case characters or cancel for none?');
  UC = confirm('Unique criteria must be selected. Press OK for Upper case characters or cancel for none?');
  Numbers = confirm('Unique criteria must be selected. Press OK for Numeric case characters or cancel for none?');
  SC = confirm('Unique criteria must be selected. Press OK for Special characters or cancel for none?');
  }
  return [num1, LC, UC, Numbers, SC]

}

// Function for getting a random element from an array
function getRandom(arr) {

  //create the array random item and return item value to other function
var random = arr[Math.floor(Math.random()* arr.length)];
return (random);
}

// Function to generate password with user input
function generatePassword() {
  // get users options

    //grab random characters from requirements from array
//set i as number of characters max runs can be the number of items if only 1 variation selected (stopping at selected choice is true) loop through the random generator function in order of type skipping ones not selected by user
var data = getPasswordOptions();
//J is the count of items run within the loop so it can stop before the loop ends if needed
var j = 0
var finishedpassword = ''
//maximum runs can be 64 with one selection comments are for all functions
for (var i = 0; i = (data[0]); i++){
//If LowerCase is true check that the loop has not reached max limit, if so break if not run function then add another count
if (data[1]){
  if(j === data[0]){

  break;}
else{
getRandom(lowerCasedCharacters);
finishedpassword = finishedpassword + getRandom(lowerCasedCharacters)
j = j + 1
}
}
if (data[2]){
  if(j === data[0]){

  break;}
else{
getRandom(upperCasedCharacters);
finishedpassword = finishedpassword + getRandom(upperCasedCharacters)
j = j + 1
  }
}
if (data[3]){
  if(j === data[0]){

  break;}
else{
getRandom(numericCharacters);
finishedpassword = finishedpassword + getRandom(numericCharacters)
j = j + 1
  }

if (data[4]){
  if(j === data[0]){

    break;}
else{
getRandom(specialCharacters);
finishedpassword = finishedpassword + getRandom(specialCharacters)
j = j + 1
  }
}
}
}
console.log(finishedpassword)
return(finishedpassword)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log("1")
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log("6")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);