let teacher = 1;
let students = 13;
let pizzaBoxes = 3;
let slicesInBox = 8;

let totalPizzaSlices = pizzaBoxes * slicesInBox
let leftOver = totalPizzaSlices % (students + teacher)

console.log(leftOver);