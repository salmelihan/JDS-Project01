/**
 * Q4. The following JSON object has been provided to you in data.js:

This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

What to do?

3.Create a main.js file and write the following functions */

json = (require('./data')); 
let parsedJson = JSON.parse(json)


// Write a function that console.logs each character object in the data.
let logData = function() {
    console.log(parsedJson);
};

logData();



// Write a function that console.logs each character's name
let logNames = function() {

    for (var index in parsedJson.people){
        console.log(parsedJson.people[index]['name']);
    }
};

logNames();


// Write a function that console.logs each character's name and eye color
let logNameEyes = function() {
    for (var index in parsedJson.people){
        console.log(parsedJson.people[index]['eye_color']);
    }
};

logNameEyes();


// Write a function that console.logs each character's name whose mass is greater than 75

let logByMass = function() {
    for (var index in parsedJson.people){

        if (parsedJson.people[index]['mass']>75)
        console.log(parsedJson.people[index]['mass']);
    }
};


logByMass();