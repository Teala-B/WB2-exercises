var roomLength = 11
var roomWidth = 12
var tileAmount = 12

var boxes = (roomLength * roomWidth) / tileAmount
var extraAmount = (roomLength * roomWidth) * .1
var extraBox = extraAmount / tileAmount
var boxAmount = boxes + extraBox

console.log("The amount of boxes needed is " + Math.ceil(boxAmount));