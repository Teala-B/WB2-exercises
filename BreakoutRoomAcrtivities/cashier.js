let quarters = 25;
let dimes = 10;
let nickles = 5;
let pennies = 1;

let cashDue = 79;

let amountofQuarters = Math.floor(cashDue / quarters)
let amountAfterQuarter = cashDue % quarters

// if (amountAfterQuarter > 0 && amountAfterQuarter <= 20){
    amountOfDimes = Math.floor(amountAfterQuarter / dimes)
    amountAfterDimes = amountAfterQuarter % dimes
// }

// if (amountAfterDimes > 0 && amountAfterDimes <= 5){
    amountOfNickles = Math.floor(amountAfterDimes / nickles)
    amountAfterNickles = amountAfterDimes % nickles
// }

// else if (amountAfterNickles > 0 && amountAfterNickles <= 4){
    amountOfPennies = Math.floor(amountAfterNickles / pennies)
    amountAfterPennies = amountAfterNickles % pennies
// }

console.log("The amount of quarters is " + amountofQuarters);
console.log("The amount of dimes is " + amountOfDimes);
console.log("The amount of nickles is " + amountOfNickles);
console.log("The amount of pennies is " + amountOfPennies);