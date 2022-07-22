// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {


  return pwd 
}


function getPwdOptions() {
  var length = window.prompt("How many characters do you want your password to be? Please enter a number between 8 - 127")
  var uppercase = window.confirm("Do you want to include Uppercase letters in your password")
  var num = window.confirm("numbers?")
  var special = window.confirm("Special Characters")

  var userOptions = {
    length: length,
    uppercase: uppercase,
    num: num,
    special: special
  }
  return userOptions
}

getPwdOptions()


var chosenArray = []

options
Numberarray

// var confirmNumbers = window.confirm("Would you like to include numbers")
//   if (confirmNumbers) {
//     console.log("yes")
//   }else{
//     console.log("no")
// }
  

  let specialCharacters = ["!", "#", "$", "%", "^", "*", ">", "<","^", "(", ")"]
  let specialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

  let specialCharacters2 = ["!", "#", "$", "%", "^", "*"]
  let specialChar2 = specialCharacters2[Math.floor(Math.random() * specialCharacters2.length)]
  
  let uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let upperChar = uppers[Math.floor(Math.random() * uppers.length)]

  let uppers2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let upperChar2 = uppers2[Math.floor(Math.random() * uppers2.length)]

  let lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let lowerChar = lowers[Math.floor(Math.random() * lowers.length)]

  let lowers2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let lowerChar2 = lowers2[Math.floor(Math.random() * lowers2.length)]

  let Num = [Math.floor(Math.random() * 10)]
  let Num2 = [Math.floor(Math.random() * 10)]
  let Num3 = [Math.floor(Math.random() * 10)]
  let Num4 = [Math.floor(Math.random() * 10)]
  
  // function getSpecialCharacter(){
  
  //   switch(specialCharacter)
  //     case 0:
  //       pwdSpecial= 
  //         break;
  //     case 1:
  //       pwdSpecial= 
  //         break;
  // }

  // YES UPPERS, YES LOWERS, YES SPECIAL, YES NUMBERS; 8,9,10
 let One = upperChar+specialChar+Num+lowerChar+Num2+upperChar2+specialChar2+lowerChar2
 let Two = upperChar+specialChar+Num+lowerChar+Num2+upperChar2+specialChar2+lowerChar2+Num3
 let Three = Num4+upperChar+specialChar+Num+lowerChar+Num2+upperChar2+specialChar2+lowerChar2+Num3
 // NO UPPERS, YES LOWERS, YES SPECIAL, YES NUMBERS;8,9,10
 let Four 
 let Five 
 let Six
// NO UPPERS, YES LOWERS, NO SPECIAL, 
  console.log(One)
  console.log(Two)
  console.log(Three)

  var pwd = [upperChar+specialChar+Num+lowerChar+Num2+upperChar2+specialChar2+lowerChar2+Num3+Num4]
  let ppwd = pwd[Math.floor(Math.random() * pwd.length)]

  console.log(ppwd)
  const symbols = ["!", "#", "$", "%", "^", "*"]
  const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  pass = [symbols, alphaUpper]

  console.log(symbols[Math.floor(Math.random() * symbols.length)]+symbols[Math.floor(Math.random() * symbols.length)])
  console.log(lowers2[Math.floor(Math.random() * lowers2.length)])

// for (i=0;i<=8;i--) {
//   console.log("hi")
// }
 for (length; length<0; length--) {

 }


//  function getPwdOptions() {
//   var length = window.prompt("How many characters do you want your password to be? Please enter a number between 8 - 127")
//   var uppercase = window.confirm("Do you want to include Uppercase letters in your password")
//     // if (confirmuppercase) {
//     //   userPassword = [uppers+lowers]
//     // }else{
//     //   userPassword = [lowers]
//     // }
//   var num = window.confirm("numbers?")
//     // if (confirmnum) {
//     //   userPassword = [lowers+num]
//     // } 
//     // if (confirmnum, confirmuppercase) {
//     //   userPassword = [uppers+num+lowers]
//     // }
//     // else{
//     //   userPassword = [lowers+uppers]
//     // }
//   var special = window.confirm("Special Characters")
//     // if (confirmspecial) {
//     //   userPassword = [specialCharacters+lowers]
//     // }
//     // if (confirmspecial, confirmnum){
//     //   userPassword = [specialCharacters+num+lowers]
//     // }
//     // if (confirmspecial, confirmnum, confirmuppercase){
//     //   userPassword = [specialCharacters+num+lowers+uppers]
//     // }else{
//     //   userPassword = [num+lowers+uppers]
//     // }