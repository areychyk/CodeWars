//task 1____________________

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(function (a){ return a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()}).join("");
//   }
  

  //__________________________________________________________end/


  //task 2________________________________________________

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// function disemvowel(str) {
//   let consonants = str.replace(/[aeiou]/gi, '');
//   return consonants;
// }

//end___________________________________

  //task 3________________________________________________

// function highAndLow(numbers){
//   let arr = numbers.split(" ").map(Number)

//   return Math.max.apply(0, arr) + " " + Math.min.apply(0, arr)
// }

// highAndLow("1 2 3 4 5");
//end___________________________________

  //task 4________________________________________________

function spinWords(string){
  let arr = string.split(" ");
  let result= "";
  for (let i=0; i<arr.length; i++){
  if (arr[i]>=5){
    result = arr[i].split("").reverse().join("");
  }else{
    result += " " + arr[i];
  }
  }
  console.log (result)
}

spinWords("Welcome");

// let arr= "Welcome";
// let result=arr.split("").reverse().join("");

// console.log (result);
