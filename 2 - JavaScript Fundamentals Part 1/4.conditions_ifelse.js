console.log('-----------------------------------------------');

const age = 15;
if (age >= 18) {
    console.log('Elegible to get licence');
} else {
    const yearsLeft = 18 - age;
    console.log(`Too young to get a licence. Wait another ${yearsLeft} year`);
}

console.log('-----------------------------------------------');

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
    console.log(`You belong to ${century = 20} century`)
} else {
    console.log(`You belong to ${century = 21} century`)
}

console.log('-----------------------------------------------');

const sallary = 100000;

if (sallary >= 10000) {
    console.log(`Your bonus is ${sallary + 1000}`);
} else if (sallary >= 80000) {
    console.log(`Your bonus is ${sallary + 8000}`);
} else if (sallary >= 50000) {
    console.log(`Your bonus is ${sallary + 5000}`)
} else {
    console.log(`Interns bonus is ${sallary + 2000}`)
}

console.log('-----------------------------------------------');

if (sallary >= 10000) {
    console.log(`Your bonus is ${sallary + 1000}`);
} if (sallary >= 80000) {
    console.log(`Your bonus is ${sallary + 8000}`);
} if (sallary >= 50000) {
    console.log(`Your bonus is ${sallary + 5000}`)
} else {
    console.log(`Interns bonus is ${sallary + 2000}`)
}

console.log('-----------------------------------------------');

//Coding Challenge 2 (BMI Comparison)

const massManohar = 52;
const heightManohar = 1.65; 
const massVishal = 50;
const heightVishal = 1.75;
const BMIManohar = massManohar / heightManohar ** 2;
const BMIVishal = massVishal / (heightVishal * heightVishal);

if (BMIManohar > BMIVishal) {
    console.log(`Manohar's BMI ${BMIManohar} is higher than Vishal's BMI ${BMIVishal}`);
} else {
    console.log(`Vishal's BMI ${BMIVishal} is higher than Manohar's BMI ${BMIManohar}`);
}