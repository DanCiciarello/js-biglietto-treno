// User declares year of birth
const userYearOfBirth = parseInt(prompt("Insert your year of birth"));

// User declares distance
const userKilometres = parseInt(prompt("Insert the kilometres that you need to do"));

// Create a variable with current year
const currentDate = new Date();

// Calculate the age of the user
const userAgeCalc = currentDate.getFullYear() - userYearOfBirth;

// Calculate the prices
const ticketPriceFull = 0.21 * userKilometres;
const ticketPriceYoung = ticketPriceFull - (ticketPriceFull * 0.2);
const ticketPriceSenior = ticketPriceFull - (ticketPriceFull * 0.4);

// Get the HTML elements
const userAge = document.getElementById("user-age");
const userDistance = document.getElementById("user-distance");
const userPrice = document.getElementById("final-price");

// Assign value to HTML elements
userAge.innerHTML = `Età: ${userAgeCalc} anni`;
userDistance.innerHTML = `Distanza: ${userKilometres} km`;

if (userAgeCalc < 18) {
    userPrice.innerHTML = `Prezzo: ${ticketPriceYoung.toFixed(2)} €`;
} else if (userAgeCalc >= 65) {
    userPrice.innerHTML = `Prezzo: ${ticketPriceSenior.toFixed(2)} €`;
} else {
    userPrice.innerHTML = `Prezzo: ${ticketPriceFull.toFixed(2)} €`;
}