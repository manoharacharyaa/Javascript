//Type Conversion
//here '1991' is of type String
//converting String to number by using "Number()"
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

//When we convert String containing no number to Number()
console.log(Number('Manohar'));
console.log(typeof NaN); //NaN(Not a Number) 

//Type Coercion 
//it's done automatically by JS
//it happens whenever operators is dealing with 2 values of different data type
console.log('I am ' + 19 + ' years old');
console.log('23' - '10' - 3);


let n = '1' + 1; // op is 11
n = n - 1;
console.log(n);

let m = '10' - '4' - '3' - 2 + '5';
console.log(m);