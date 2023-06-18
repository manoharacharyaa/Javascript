//V:37
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        retirement >= 1 ? console.log(`${firstName} retires in ${retirement} years`)
            : console.log(`Just one year left for retiement of ${firstName}`);
            return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

yearsUntilRetirement(1959, 'Ramesh');
yearsUntilRetirement(2003, 'Manohar');