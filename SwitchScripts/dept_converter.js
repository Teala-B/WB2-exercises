let departmentCodes = 10;

console.log();
console.log("Using if");

if(departmentCodes == 1){
    console.log("Marketing");
}
else if(departmentCodes == 5){
    console.log("Human Resources");
}
else if(departmentCodes == 10){
    console.log("Accounting");
}
else if(departmentCodes == 12){
    console.log("Legal");
}
else if(departmentCodes == 18){
    console.log("IT");
}
else if(departmentCodes == 20){
    console.log("Customer Relations");
}
else {
    console.log("Not a department");
}


console.log();
console.log("Using switch");

switch(departmentCodes)
{
    case 1:
        console.log("Marketing");
        break;
    case 5:
        console.log("Human Resour");
        break;
    case 10:
        console.log("Accounting");
        break;
    case 12:
        console.log("Legal");
        break;
    case 18:
        console.log("IT");
        break;
    case 20:
        console.log("Customer Relations");
        break;
    default:
        console.log("Not a department");
        break;
}