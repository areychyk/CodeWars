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

  // function spinWords(string){
  //   return string.length >= 5 ? string
  //         .split(" ")
  //         .map((a) => (a.length >= 5 ? a.split("").reverse().join("") : a))
  //         .join(" ")
  //     : string;
  // }




// let arr= "Welcome";
// let result=arr.split("").reverse().join("");

// console.log (result);

//end___________________________________

 //task 5________________________________________________

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


// function digitalRoot(n) {
//   if (n < 10) {
//     return n;
//   }

//   while (n > 9) {
//     let digits = n.toString().split("").map(Number);
//     n = digits.reduce((sum, current) => sum + current);
//   }

//   return n;
// }

//end___________________________________


 //task 6________________________________________________

//  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
//end___________________________________


 //task 7________________________________________________


// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     args.sort(function(a, b) {
//     return a - b; } )
//     return args[0];
//   }
// }


//end___________________________________


 //task 8________________________________________________

//  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]    "Alex, Jacob and 2 others like this"



// function likes(names) {
  
//   if(names.length === 0){
//     return "no one likes this"
//   } if (names.length === 1){
//     return names[0] + " likes this"
//   }if (names.length === 2){
//     return names[0] +" and " + names[1] + " like this"
//   }if (names.length === 3){
//     return names[0] + ", " + names[1] + " and " + names[2] + " like this"
//   }if (names.length === 4){
//     return names[0] + ", " + names[1] + " and " +  Number(names.length-2) + " others like this"
//   }if (names.length > 4){
//     return names[0] + ", " + names[1] + " and " +  Number(names.length-2) + " others like this"
//   }

// }


//end___________________________________


 //task 9________________________________________________

//  Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//   let sum = 0;
// let square = numbers.map(function(item){return item*item});
//   for (i=0; i<square.length; i++){
//     sum = sum + square[i]
//   }
//   return sum
// }


//end___________________________________


 //task 10________________________________________________

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


// function getSum( a,b ){
//   let max = Math.max(a,b);
//    let min = Math.min(a,b);
//   let sum = max;
//   for (let i=min; i<max; i++)
//    sum= sum +i;
//   return sum
// }



//end___________________________________


 //task 11________________________________________________