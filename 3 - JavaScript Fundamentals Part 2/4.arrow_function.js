//Arrow Function

//for single condition
const calcAge = birthYear => 2023 - birthYear;
const age3 = calcAge(2003);
console.log(age3);

//for one parameter & multiple conditions
const retirementAge = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(retirementAge(2003));

//for multiple parameter & multiple conditions
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retiers in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Manohar'));