var intrestRate = 10;
var ruleNumber = 72;
var originalAmount = 200;
var doubleAmount = 400;

var years = ruleNumber / intrestRate;

console.log("At a " + intrestRate + "% interest rate, your savings account will be worth " + doubleAmount.toFixed(2) + " in " + years.toFixed(1) + " years")