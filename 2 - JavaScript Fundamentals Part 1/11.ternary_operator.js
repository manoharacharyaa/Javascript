//Ternary Operator 
const age = 19;
//condition ? (if part) : (else part)
age >= 18 ? console.log('Elegible to vote') : console.log('waite till age 18');

const candidate = age >=18 ? 'can vote' : 'cant vote';
console.log(candidate);

//Using Ternary operator with Templete Litral
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);