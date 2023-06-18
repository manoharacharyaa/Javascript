//V:39
//Arrays
const team1 = 'RCB';
const team2 = 'CSK';
const team3 = 'SRH';
const team4 = 'KKR';

//Creating Array
const teams = ['RCB', 'CSK', 'SRH', 'KKR'];
console.log(teams);
console.log(teams.length);
console.log(teams[teams.length - 1]);

teams[2] = 'MI';
console.log(teams);
//Note: all the elements of array are const but we have learnt the const val can't be changed 
//but we are able to change it here
//Reason: only premative val are immutable(unchangable) an array is not a premative value


//Creating Array using Array function
//Using new keywoard is mandotory
const year = new Array(2000, 2001, 2002, 2003);
console.log(year);
console.log(year[0]);
console.log(year[3]);

//Arrays containing values of diff data type
const firstName = 'Manohar';
const student = [firstName, 'Acharya', 2003, 5.5, 19];
console.log(student);

//Calling Array inside of an Array
const IPL = new Array(teams);
console.log(IPL);

//Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYearl
}

const years = [1990, 1992, 1997, 2000, 2003];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year.length - 1);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1])];
calcAge(years[years.length - 1]);
console.log(ages);
