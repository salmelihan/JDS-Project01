/** Q1
Write a function that takes in a parameter called num, and returns a random number between 0 and num. Look up documentation for Math.Random().
Examples:
getRandomNum(6) ➞  returns a random number between 0 and 6
getRandomNumber(10) ➞ returns a random number between 0 and 10
*/

// Solution of Q1
let getRandomNum = function(num){
    this.num = num;
    return Math.floor(Math.random() * Math.floor(this.num));
}
console.log("\n********* Start from here Solution of Q1 ************");
console.log("random number between (0 and 6)  =====> "+getRandomNum(6));
console.log("random number between (0 and 10) =====> "+getRandomNum(10));
console.log("********* End here Solution of Q1 *******************\n");


/** Q2
A leap year has one day added to February for being synchronized with the seasonal year. 
A leap year appears with a regular frequency, which is determined by the rule below:
The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100. 
Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

Examples
isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
isLeap(2000) ➞ true // Exactly divided by 400.
isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.
*/



let isLeap = function (year){
    this.year = year
  return ((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 ===0);
}

console.log("\n********* Start from here Solution of Q2 ************");
console.log('isLeap(2020)'+ '➞ ' + isLeap(2020));
console.log('isLeap(1800)'+ '➞ ' + isLeap(1800));
console.log('isLeap(2000)'+ '➞ ' + isLeap(2000));
console.log('isLeap(2019)'+ '➞ ' + isLeap(2019));
console.log("********* End here Solution of Q2 *******************\n");



