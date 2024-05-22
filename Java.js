// 1: Create a variable that stores your name and log a string to the console that provides a personalised greeting e.g. “Hello John” 
let myName = "John";
console.log(`Hello ${myName}`);



// 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including your name and these values to the console. 

let favouriteColour = "Pink";
let favouriteFilm = "The Holiday";
console.log(`${myName}, your favourite colour is ${favouriteColour} and your favourite media is ${favouriteFilm}.`);


// 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the breakfast, lunch and dinner variables to what you are eating today and log the new values to the console.  
let breakfastYesterday = "Waffles";
let lunchYesterday = "Roast";
let dinnerYesterday = "Fish & Chips";

// Update to today's meals
let breakfastToday = "Oats";
let lunchToday = "Steak";
let dinnerToday = "Lobster";

// Log yesterday's meals
console.log(`Yesterday, you had ${breakfastYesterday} for breakfast, ${lunchYesterday} for lunch, and ${dinnerYesterday} for dinner.`);

// Log today's meals
console.log(`Today, you're having ${breakfastToday} for breakfast, ${lunchToday} for lunch, and ${dinnerToday} for dinner.`);


// 4: Research on below string methods and experiment with them to see how you can manipulate / work with the string data. Put together some examples. 

Length(), slice(), toUpperCase(), trim(), split(), replaceAll(), replace() 

// Example string
let exampleString = "   Hello, World   ";

// Length
console.log(`Length: ${exampleString.length}`);

// Slice
console.log(`Slice: ${exampleString.slice(0, 5)}`);

// ToUpperCase
console.log(`ToUpperCase: ${exampleString.toUpperCase()}`);

// Trim
console.log(`Trim: ${exampleString.trim()}`);

// Split
console.log(`Split: ${exampleString.split(' ')}`);

// ReplaceAll
console.log(`ReplaceAll: ${exampleString.replaceAll('World', 'Universe')}`);

// Replace
console.log(`Replace: ${exampleString.replace('World', 'Universe')}`);

// 5: Write conditional statement to check ATM transaction: Think of a scenario where you are withdrawing money from ATM, create a cash machine / atm function which take card number and pin as parameters, your card pin and number should be check first if correct then: 

// If the withdrawal amount is less than or equal to the account balance, the transaction should be successful, and the new/updated balance should be printed in the console of browser. Otherwise, if the withdrawal amount exceeds the account balance, the transaction should fail due to insufficient funds. 

// Also you shouldn’t be able to withdraw more than 250 

// If the card number or pin is incorrect, alert(‘Card Rejected’).

function atmTransaction(cardNumber, pin, withdrawalAmount) {
    // Example account balance
    const accountBalance = 500;

    // Check if card number and pin are correct
    if (cardNumber === "98765" && pin === "0000") {
        // Check if withdrawal amount is within limits and sufficient funds
        if (withdrawalAmount <= accountBalance && withdrawalAmount <= 250) {
            const newBalance = accountBalance - withdrawalAmount;
            console.log(`Transaction successful. New balance: ${newBalance}`);
        } else {
            console.log("Transaction failed. Insufficient funds or withdrawal limit exceeded.");
        }
    } else {
        alert('Card Rejected');
    }
}

// Example usage
atmTransaction("98765", "0000", 200); // Should print "Transaction successful. New balance: 300"


// 6: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console. 

const favoriteMedia = ["The Devil Wears Prade", "The Holiday", "The Crown", "Real Housewives", "My Wife and Kids"];

// Add 2 more items to the array
favoriteMedia.push("The Tudors", "Friends")

// Loop through the array and log each item
for (let i = 0; i < favoriteMedia.length; i++) 
    console.log(favoriteMedia[i]);

// 7: Create a function which will ask user for input to guess a number between 1-10, then generate random numbers between 1-10 until the guess number is generated. When the guess number is generated, alert ‘ Congratulation! Guess number found [x-time] attempts’ 

// Note: x-time => number of iterations in which the guess number was found. 

function guessNumber() {
    const maxAttempts = 10;
    let attempts = 0;
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    while (attempts < maxAttempts) {
        const userGuess = prompt("Guess a number between 1-10:");
        attempts++;
        if (parseInt(userGuess) === randomNumber) {
            alert(`Congratulations Guess number found in ${attempts} attempts.`);
            break;
        }
    }
}

guessNumber();

// 8: Creating a function that generates random password of length that you are passing as argument to the function. 

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Example usage
console.log(generateRandomPassword(4)); // Generates a random password of 4 characters