var x1 = 2
var x2 = 8
var y1 = 2
var y2 = 6

var distaceOfX = (x2 - x1) * (x2 - x1)
var distaceOfY = (y2 - y1) * (y2 - y1)

var distance = distaceOfX + distaceOfY
//Math.sqrt is for square root (put what is supposed to be square rooted in parenthesis)
console.log("The distance between (x1,y1) and (x2,y2) is " + Math.sqrt(distance).toFixed(2));