// Description: This script tests various numeric conversation techniques
// Author: Jordan Q. Newprogrammer

var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";

var aI = parseInt(" 101.1 ");
var bI = parseInt("55");
var cI = parseInt("402 Stevens");
var dI = parseInt("Number 5 ");

var aF = parseFloat(" 101.1 ");
var bF = parseFloat("55");
var cF = parseFloat("402 Stevens");
var dF = parseFloat("Number 5 ");

var aNumber = Number(" 101.1 ");
var bNumber = Number("55");
var cNumber = Number("402 Stevens");
var dNumber = Number("Number 5 ");

var payRate = " 101.1 ";
var payRate = "55";
var payRate = "402 Stevens";
var payRate = "Number 5 ";
payRate = +payRate;

console.log(aI, bI, cI, dI);
console.log(aF, bF, cF, dF);
console.log(aNumber, bNumber, cNumber, dNumber);
console.log(payRate);