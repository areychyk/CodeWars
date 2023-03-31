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


//  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(arrayOfSheep) {
//   let newArr =[];
//   for (let i=0; i<arrayOfSheep.length; i++){
//     if (arrayOfSheep[i]==1){
//       newArr.push(arrayOfSheep[i])
//     }
//   }
//   return newArr.length
// }


//end___________________________________


//task 12___________________________________________


// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
//
//     However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
//
// Task
// Given an integral number, determine if it's a square number:
//
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//
//     The tests will always use some integral number, so don't worry about that in dynamic typed languages.
//
// Examples
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false
// isSquare (-1) // => false
// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true
// isSquare  26  // => false

// console.log(Math.sqrt(25))

//  function square (n) {
//     let sqrt = Math.sqrt(n)
//     if (Number.isInteger(sqrt) === true){
//         return true
//     }else{
//         return false
//     }
//
// }

// or

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }


// console.log(Math.sqrt(26) % 1)
// // console.log(Math.sqrt(26) % 2)
// console.log(square(-1))
// console.log(Number.isInteger())


// __________end_____________________________


// ________________task 13___________________________

// Your task is to create a function that does four basic mathematical operations.
//
//     The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.
//
// Examples(Operator, value1, value2) --> output

//
// function basicOp(operation, value1, value2) {
//     if (operation === "+") {
//         return value1 + value2
//     }
//     if (operation === "-") {
//         return value1 - value2
//     }
//     if (operation === "*") {
//         return value1 * value2
//     }
//     if (operation === "/") {
//         return value1 / value2
//     }
//
// }
// // ('+', 4, 7) --> 11
// // ('-', 15, 18) --> -3
// // ('*', 5, 5) --> 25
// // ('/', 49, 7) --> 7
// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))


// __________end_____________________________


// ________________task 14___________________________

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// function squareDigits(num){
//   let newArr = String(num).split("").map((num)=>{return Number(num*num)}).join("");
//   return Number(newArr)


// }

// __________end_____________________________


// ________________task 15___________________________

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// function sortArray(array) {
//   const oddArr = [];
//   const evenArr = [];
//   const result = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//       evenArr.push(array[i]);
//     } else {
//       oddArr.push(array[i]);
//     }
//   }
//   oddArr.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 === 0) {
//       result.push(evenArr.shift());
//     } else {
//       result.push(oddArr.shift());
//     }
//   }
//   return result;
// }

//task 16_____________________________________

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let num = args[0];
//     for (let i=0; i<args.length; i++){
//       if (args[i]<num){
//         num = args[i]
//       }
//     }
//     return num

//   }
// }


//end___________________________________


//task 14_____________________________________

// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//   return x.replace(/\s/g, '')
// }


//end___________________________________

//task 17_____________________________________

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   let sum =0;
//  while (num>=0){
//    sum = sum + num;
//    num--
//  }
//   return sum
// }

//end___________________________________

//task 18_____________________________________

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//   let sum = "";
//   while (n>0){
//     sum +=s
//     n--
//   }
//   return sum;
// }

//end___________________________________


//task 19_____________________________________

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){

//   return str.slice(1,-1)
// };


//end___________________________________


//task 20_____________________________________

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// function numberToString(num) {
//   return num.toString();
// }


//end___________________________________

//task 21_____________________________________

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// function findShort(s){
//   let arr = s.split(" ").sort((a, b) => a.length - b.length);
//   return arr[0].length
// }
//end___________________________________

//task 22_____________________________________
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//   if(bool){
//     return "Yes";
//   }else{
//     return "No"
//   }
// }

//end___________________________________

//task 23_____________________________________

// Complete the solution so that it reverses the string passed into it.


// function solution(str){
//   return str.split("").reverse().join("");

// }

//end___________________________________

//task 24_____________________________________


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   if (num<0){
//     return num;
//   }else if (num>0){
//     return -num;
//   }else{
//     return 0
//   }

// }

//end___________________________________

//task 25_____________________________________


// Very simple, given an integer or a floating-point number, find its opposite.

// function opposite(number) {
//   return number*(-1);
// }

//end___________________________________


//task 26_____________________________________


// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
//     #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
// #Input
//
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
//
//     #Output
//
// The middle character(s) of the word represented as a string.

// function getMiddle(s) {
// let middle = Math.floor(s.length/2)
//     if(s.length%2===0){
//         return s[middle-1] + s[middle]
//     }else{
//         return s[middle]
//     }
//
//
// }
//
// console.log(getMiddle("test"))

//end___________________________________

//task 27_____________________________________

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел. Не будут переданы числа с плавающей запятой или неположительные целые числа.
//
//     Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
//
//     [10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.
// let arr= [19, 5, 42, 2, 77];

// function sumTwoSmallestNumbers(numbers) {
//     let minOne=numbers[0]
//     for(let i=1;i<numbers.length; i++){
//         if(numbers[i]<minOne) {
//             minOne=numbers[i]
//         }
//         }
//     return minOne
//     }

// function sumTwoSmallestNumbers(numbers) {
//     let sortArr = numbers.sort((a,b)=>a-b)
//     return sortArr[0]+sortArr[1]
// }
// console.log(sumTwoSmallestNumbers(arr))


// function min(obj) {
//     var a = obj[0];
//     for (var i = 1; i < obj.length; i++) {
//         if (obj[i] < a) {
//             a = obj[i];
//         }
//     }
//     return a;
// }
//
// console.log(min(arr))


//end___________________________________

//task 28_____________________________________


// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
//
//     function shortcut (string) {
//     return string.replace(/[aeiou]/gi, '')
// }


//end___________________________________

//task 29_____________________________________

// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
//
//     [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task
//
// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// var hotpo = function(n){
//     if(n == 0) return 0; //Optional Handler to n = 0
//
// }

// var hotpo = function(n){
//     while (n===1){
//         if(n % 2 === 0) return n/2;
//         // if(n % 2 === 1) return 3*n+1;
//     }
//
//
// }

// var hotpo = function(n){
//     let c=0
// while (n>1){
//     n= n%2===0 ? n/2 : 3*n+1
//     c++
// }
// return c
//
//
//
//
// }

// var hotpo = function(n){
//     var c = 0;
//
//     while (n > 1) {
//         n = n % 2 ? 3 * n + 1 : n / 2;
//         c++;
//     }
//
//     return c;
// }
//
// console.log(hotpo(3))


//end___________________________________

//task 30_____________________________________

//
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
//     For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// const quarterOf = (month) => {
//
//     if ( month === 1){
//         return 1
//     }
//     if ( month === 2){
//         return 1
//     }
//     if ( month === 3){
//         return 1
//     }
//     if ( month === 4){
//         return 2
//     }
//     if ( month === 5){
//         return 2
//     }
//     if ( month === 6){
//         return 2
//     }
//     if ( month === 7){
//         return 3
//     }
//     if ( month === 8){
//         return 3
//     }
//     if ( month === 9){
//         return 3
//     }
//     if ( month === 10){
//         return 4
//     }
//     if ( month === 11){
//         return 4
//     }
//     if ( month === 12){
//         return 4
//     }
//
//         }
// console.log(quarterOf(10))
//
//
// const quarterOf = (month) => {
//     if (month <= 3) {
//         return 1
//     } else if (month <= 6) {
//         return 2
//     } else if (month <= 9) {
//         return 3
//     } else if (month <= 12) {
//         return 4
//     }
//
// }


//end___________________________________

//task 31_____________________________________


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//
//     function removeExclamationMarks(s) {
//     return s.replace(/[!]/gi,"")
// }


//end___________________________________

//task 32_____________________________________


// The Collatz Conjecture states that for any positive natural number n, this process:
//
//     if n is even, divide it by 2
// if n is odd, multiply it by 3 and add 1
// repeat
// will eventually reach n = 1.
//
// For example, if n = 20, the resulting sequence will be:
//
//     [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
//     In the example above, the output would be 8.


// function collatz(n) {
//
//     let a=[]
//
//    while (n<=1)
//     if(n%2===0){
//         a++
//     }else{
//         a++
//     }
//     return a
//
// }
// function collatz(n) {
//     let c = 0
//     while (n > 1) {
//         n = n % 2 === 0 ? n / 2 : 3 * n + 1
//         c++
//     }
//     return c+1
// }
// console.log(collatz(20))
//
//
// function collatz(n) {
//     var l = 1;
//     while(n > 1) {
//         l++
//         n = n % 2 == 0 ? n / 2 : n * 3 + 1;
//     }
//     return l;
// }


//end___________________________________

//task 33_____________________________________


// Task
// Given a string str, reverse it and omit all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//
//     Input/Output
//     [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string


// function reverseLetter(str) {
//     return str.split("").reverse().
//
//
// }
// function reverseLetter(str) {
//     return str.replace(/[^a-zа-яё]/gi, '').split("").reverse().join('')
//     // return str.replace(/[0-9,?,@]/gi, '').split("").reverse().join('')
//
//
// }


// function disemvowel(str) {
//   let consonants = str.replace(/[aeiou]/gi, '');
//   return consonants;
// }

// console.log(reverseLetter("krisha5n05?@"))


//end___________________________________

//task 34_____________________________________


//
// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.
//
//     We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
//
//     For example:
//     Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
//
// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price

// function discoverOriginalPrice(discountedPrice, salePercentage){
//     // return Math.round(discountedPrice/(1-salePercentage/100))
//     return Math.round(discountedPrice / (1 - salePercentage / 100) * 100) / 100;
//
// }
//
// console.log(discoverOriginalPrice(75.88,33))


//end___________________________________

//task 35_____________________________________


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// function isIsogram(str){
//   let arrStr = str.toLowerCase()
//
//     for (let i = 0; i < arrStr.length; i++) {
//         for (let j = i+1; j < arrStr.length; j++) {
//             if(arrStr[i]===arrStr[j]){
//                 return false
//             }
//         }
//
//         }
// return true
//
// }
// function isIsogram(str){
//
//     str = str.toLowerCase();
//     for(let i = 0; i < str.length; ++i) {
//         for(let j = i + 1; j < str.length; ++j) {
//             if(str[i] === str[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// function isIsogram(str){
//     var hash = {};
//     str = str.toLowerCase();
//     for (var i = 0; i < str.length; i++) {
//         if (hash[str[i]]) {
//             return false;
//         }
//         hash[str[i]] = true;
//     }
//     return true;
// }

// console.log(isIsogram('aba'))//false
// console.log(isIsogram('moOse'))//false
// console.log(isIsogram('Dermatoglyphics'))//true


// describe("Tests", () => {
//     it("test", () => {
//         assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//         assert.strictEqual( isIsogram("isogram"), true );
//         assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//         assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//         assert.strictEqual( isIsogram("isIsogram"), false );
//         assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//     });
// });


//end___________________________________

//task 36_____________________________________
// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     return s.split('').map((char, index) => (char.toUpperCase() +char.toLowerCase().repeat(index) )).join("-")
// }
//
// console.log(accum("abcd"))
//
//
//
// s[2].repeat(s.indexOf(s[2+1]))

//end___________________________________


//task 37_____________________________________


// function sumCubes(n) {
//     if(n==1){
//         return 1
//     }else{
//         return n**3 + sumCubes(n-1)
//     }
//
//
//
// }
//
// console.log(sumCubes(3))


//end___________________________________

//task 38_____________________________________


// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
//
// When bool is truthy, func1 should be called, otherwise call the func2.
//
//     Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.
//
//
//
// function _if(bool, func1, func2) {
//     if(bool){
//         func1()
//     }else{
//         func2()
//     }
// }


//end___________________________________

//task 39_____________________________________


// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."
//
//     These dots at the end also add to the string length.
//
//     So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."
//
// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.
//
// e.g. trim("He", 1) should return "H..."
//
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
//
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"


// function trim(str, size) {
//     if(str.length<=size) {
//         return str
//
//     } else if(str.length<=3){
//         return str.slice(0,size)+ `...`
//
//     }
//     else if(str.length>size){
//         return str.slice(0,size-3) + `...`
//
//     }
// }
// function trim(str, size) {
// if(str.length > size){
//     if(size > 3){
//         str = str.slice(0,size - 3) + '...';
//     }
//     else{
//         str = str.slice(0,size) + '...';
//     }
// }
// return str;
// }
//
//
// console.log(trim('Hi',1))
// console.log(trim("Creating kata is fun", 14))
// console.log(trim("Code Wars is pretty rad", 50))
// console.log(trim("iLwT", 3))//
// console.log(trim("CFfWf", 3))//CFf...


//end___________________________________

//task 40_____________________________________


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
//
//

// function arrayDiff(a, b) {
//     let result =[]
//      for (let i = 0; i < a.length; i++) {
//         if(!b.includes(a[i])){
//             result.push(a[i])
//         }
//     }
//
//
//     return result
//
// }
//
//
// // console.log(arrayDiff([1,2], [1]))
// // console.log(arrayDiff([1,2,2], [1]))
// console.log(arrayDiff([], [1,2]))//
// console.log(arrayDiff([1,2,2], []))
// console.log(arrayDiff([1,2,3], [1,2]))


// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
// assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")


//end___________________________________

//task 41_____________________________________

// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// function findOdd(A) {
//     const newArray = (arr, val) => arr.filter((el) => el === val);
//     let resul = 0;
//     A.forEach((element) => {
//         if (newArray(A, element).length % 2 !== 0) {
//             resul = element;
//         }
//     });
//     return resul;
// }
//
//
// console.log(findOdd([1,1,2]))
// console.log(findOdd([0,1,0,1,0]))


//end___________________________________

//task 42_____________________________________


// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!


// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
//
// }
//
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


//
//
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }


//end___________________________________


//task 43_____________________________________


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


//
// function findOutlier(integers) {
//     let even = []
//     let odd = []
//
//     for (let i = 0; i < integers.length; i++) {
//         (integers[i] % 2 === 0)
//             ? even.push(integers[i])
//             : odd.push(integers[i])
//     }
//
//
//     return even.length === 1 ? even[0] : odd[0]
// }


// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([1, 2, 3]))
// console.log(findOutlier([2, 6, 8, 10, 3]))
// console.log(findOutlier([0, 0, 3, 0, 0]))
// console.log(findOutlier([1, 1, 0, 1, 1]))
// console.log(findOutlier([1, 1, 1]))
// console.log(findOutlier([2, 2, 2]))


//end___________________________________


//task 44_____________________________________


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str) {
// let arr = str.toLowerCase().split('')
//     let resultX =[]
//     let resultO =[]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==='x'){
//             resultX.push(arr[i])
//         }else if(arr[i]==='o'){
//             resultO.push(arr[i])
//         }
//
//     }
//
//     return resultX.length===resultO.length
// }
//
// console.log(XO('xo'))
// console.log(XO("xxOo"))
// console.log(XO("xxxm"))
// console.log(XO("Oo"))
// console.log(XO("ooom"))

//end___________________________________


//task 45_____________________________________


//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// function toCamelCase(str) {
//
//     let arr = str.split(/\s*-|_\s*/)
//
// if(str.length){
//     return arr.map(w=>w[0].toUpperCase() + w.slice(1)).join('').toString()
// }
// return str
//
// }




// function toCamelCase(str){
//     str = str.split('');
//     return str.map(function(el, i){
//         if(el === '-' || el === '_'){
//             el = str[i+1].toUpperCase();
//             str.splice(i+1, 1);
//         }
//         return el;
//     }).join('');
// }
//
// console.log(toCamelCase("the-stealth-warrior"))
// console.log(toCamelCase("the_stealth_warrior"))
// console.log(toCamelCase("The_Stealth_Warrior"))
// console.log(toCamelCase("A-B-C"))
// console.log(toCamelCase(""))


//end___________________________________


//task 46_____________________________________

//
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits), which is narcissistic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
//
//     Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
//
//     Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.



//



//end___________________________________


//task 47_____________________________________


// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
//
//     The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
//
//     Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
//

// function chromosomeCheck(sperm) {
//     let result = sperm.split('').filter(s=>s==='X')
//     console.log(result)
//     if(result.length>1){
//         return `Congratulations! You're going to have a daughter.`
//     }else{
//         return `Congratulations! You're going to have a son.`
//     }
// }
//
//
// console.log(chromosomeCheck('XX'))
// console.log(chromosomeCheck('XY'))




// Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
// Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")



//end___________________________________


//task 48_____________________________________


// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.
//
//     For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
//
//     Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
//
//     My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.
//
//     The answer should be rounded to the nearest 2 decimal places.


// function howMuchWater(water, load, clothes){
//     if(clothes/load>2){
//         return 'Too much clothes'
//     }
//     if(clothes<load){
//         return 'Not enough clothes'
//     }
//     return Number((water*1.1**(clothes-load)).toFixed(2))
// }
//
//
// console.log(howMuchWater(10,10,21))
// console.log(howMuchWater(10,10,2))
// console.log(howMuchWater(10,11,20))
// console.log(howMuchWater(50,15,29))



//end___________________________________


//task 49_____________________________________


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//    if(number%2===0){
//        return number*8
//    }
//    return number*9
// }
//
// console.log(simpleMultiplication(2))



//end___________________________________


//task 50_____________________________________



// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
//
//     For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
//
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
//
//     Good luck :)



// function nearestSq(n){
//     return Math.sqrt(n).toFixed()**2
// }
//
// console.log(nearestSq(1))
// console.log(nearestSq(111))
// console.log(nearestSq(2))
// console.log(nearestSq(10))



//end___________________________________


//task 51_____________________________________


//
// In this kata, we will make a function to test whether a period is late.
//
//     Our function will take three parameters:
//
//     last - The Date object with the date of the last period
//
// today - The Date object with the date of the check
//
// cycleLength - Integer representing the length of the cycle in days
//
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.


//
// function periodIsLate(last, today, cycleLength) {
//     return Math.ceil(Math.abs(today.getTime()-last.getTime())/(1000*3600*24))>cycleLength
// }
//
//
// console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
// console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))



//end___________________________________


//task 52_____________________________________


//
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
//
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
//
//     Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
//
// Simples!



//
// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
//
//
// console.log(fixTheMeerkat(["tail", "body", "head"]))//) ["head", "body", "tail"]
// console.log(fixTheMeerkat(["tails", "body", "heads"]))//) ["heads", "body", "tails"]
// console.log(fixTheMeerkat(["bottom", "middle", "top"]))//), ["top", "middle", "bottom"]





//end___________________________________


//task 53_____________________________________



// An AI has infected a text with a character!!
//
//     This text is now fully mutated to this character.
//
//     If the text or the character are empty, return an empty string.
//     There will never be a case when both are empty as nothing is going on!!
//
//     Note: The character is a string of length 1 or an empty string.
//
//     Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"


// function contamination(text, char){
//     if(text.length>0){
//         return char.repeat(text.length)
//     }else if(char==0){
//         return char
//     }
//     return text
// }
//
//
// console.log(contamination("abc","z"))
// console.log(contamination("","z"))
// console.log(contamination("abc",""))
// console.log(contamination("_3ebzgh4","&"))
// console.log(contamination("//case"," "))

// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(contamination("abc","z"), "zzz")
//         Test.assertEquals(contamination("","z"), "")
//         Test.assertEquals(contamination("abc",""), "")
//         Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
//         Test.assertEquals(contamination("//case"," "), "      ")
//     });
// });
