//1. Double using callback.
//Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

function doubleArray(arr,callback) {
    const doubledArr= arr.map((num) => {
        return doubledArr;
    });
    return doubledArr;
}
const originalArray = [1, 2, 3, 4];
function callback (num){
    return num * 2;
}
const doubledArr = doubleArray (originalArray, callback);
console.log(doubleArray);

// 2. String Manipulation.
//Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. TheWrite a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is: " along with the manipulated string or the new string to the console.

Function manipulateSting (inputString, callback) {
    const manipulatedString = inputString . toUpperCase();

    callback(manipulatedString);
}
function logString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}


// 3. Age in Days.
//Write a function that takes in an array of integers and a callback function, and returns a new array where each Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays

//The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name] and their age in days is [age in days]."

//Note that the ageInDays function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later time.

const person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20,
}
function ageInDays(personObject, callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays){
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`)
    };
}

//4. Arrange in alphabetical order.
//Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

const books = [
    {
        title: "The Great Gatby",
        auther: "F. Scott Fitzgerald",
        year: 1925,
    },
    {
        title: "To Kill a Mockingbird",
        auther: "Harper Lee",
        year: 1960,
    }
    {
        title: "Who are you?",
        auther: "George Orwell",
        year: 1949,
    }
];
function logTitles(titles){
    titles.sort();
    console.log(title.join(", "));
}
function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitles(books, logTitles);
