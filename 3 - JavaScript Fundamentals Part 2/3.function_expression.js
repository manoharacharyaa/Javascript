//Function Declaration Vs Function Expression

//Function Declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(2003);


//Function Expression(function without a name)
//also called anonymous function
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(2003);

//function call
console.log(age1, age2);

//Diff btwn fun declaration & fun expression
//we can call fun declaration before defining it
//but this can't be done with function expression

//fun call before fun decleration
console.log(calcPercentage(50, 10));

function calcPercentage(number, percentage) {
    result = number * percentage / 100;
    return result;
}
