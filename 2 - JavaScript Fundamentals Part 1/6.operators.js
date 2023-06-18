//Operators
const ageManohar = 2023 - 2003;
const ageVanita = 2023 - 1981;
console.log(ageManohar,ageVanita);
console.log(ageManohar * 2, ageManohar / 10, 2 ** 3);
//2 ** 3 means 2 to the power 3 

// + operator can be used for string concantination
const firstName = 'Manohar'; 
const lastName = 'Acharya';
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5;
x += 7;
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operator
console.log(ageManohar < ageVanita); // >, <, >=. <=
console.log(ageManohar >= ageVanita);
const isEqual = ageManohar == ageVanita;
console.log(isEqual);

//typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Vanita');
console.log(typeof _function);
//error in typeof operator 
console.log(typeof null);

//Coding Challenge #1 (Calculate BMI)
const massManohar = 52;
const heightManohar = 1.65; 
const massVishal = 50;
const heightVishal = 1.75;

const BMIManohar = massManohar / heightManohar ** 2;
const BMIVishal = massVishal / (heightVishal * heightVishal);
console.log(BMIManohar, BMIVishal);