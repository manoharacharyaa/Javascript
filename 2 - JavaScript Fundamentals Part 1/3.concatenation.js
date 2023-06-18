//Concananting String using "+" operator
const firstName = 'Manohar';
const lastName = 'Acharya';
const birthYear = 2003;
const currentYear = 2023;
const student = "I'm " + firstName + " birthyear is " + birthYear + ' age ' + (currentYear - birthYear);
console.log(student);

//Alternaate and a better method for string concantenation
//It's called "Templet Litrals"

const studentNew = `I'm ${firstName} birth year is ${birthYear} age is ${currentYear - birthYear}`;
console.log(studentNew);

//Note - `` can be use for any regular strings
//Note - \n\ can be used to print in a new line but this is due to a bug in JS
console.log(`Manohar Acharya \n\ a student \n\ studying at SAKEC`);