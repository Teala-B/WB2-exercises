var workedHours = 40;
var overTime = 45;
var underTime = 20;

var overHours = overTime - workedHours

var totalOverPay = (workedHours * 25) + ((overHours * 12.5) * 1.5)
var pay = 25 * workedHours
var underPay = 12.5 * underTime
var overPay = (overHours * 12.5) * 1.5

console.log(totalOverPay);
console.log(pay);
console.log(underPay);
console.log(overPay);
