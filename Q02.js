// Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.

// Examples

// convertToSeconds(1, 3) ➞ 3780
// convertToSeconds(2, 0) ➞ 7200
// convertToSeconds(0, 0) ➞ 0


function convertToSeconds(hours, minutes){
    this.hours = hours;
    this.minutes = minutes;
    hoursToSecond  = this.hours*3600;
    minutesToSecond = this.minutes*60;
    return hoursToSecond + minutesToSecond;
}

console.log("convertToSeconds(1, 3)"+" ➞ "+convertToSeconds(1, 3));
console.log("convertToSeconds(2, 0)"+" ➞ "+convertToSeconds(2, 0));
console.log("convertToSeconds(0, 0)"+" ➞ "+convertToSeconds(0, 0));