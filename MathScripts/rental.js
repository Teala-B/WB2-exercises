var vanPrice = 250
var people = 38
var vanSeats = 15

var vanAmount = people / vanSeats
var pricePerPerson = (vanPrice * Math.ceil(vanAmount)) / people
var totalAmountCollected = pricePerPerson.toFixed(2) * people
var totalVanPrice = Math.ceil(vanAmount) * vanPrice

console.log("The total price for the vans is $" + totalVanPrice);
console.log("Each person should be charged $" + pricePerPerson.toFixed(2));
console.log("The total amount collected is $" + totalAmountCollected.toFixed(2));
console.log("There is left over because when calculating the price per person the end result is rounded up for everyone.");