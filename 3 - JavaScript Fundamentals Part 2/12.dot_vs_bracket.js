//V:43
//Dot Vs Bracket Notation
//Retriving and changing data in objects

const manohar = {
    firstName: 'Manohar',
    lastName: 'Acharya',
    age: 2023 - 2003,
    job: 'student',
    friends: ['Ashu', 'Vishal', 'Rohan'],
}

//Dot Notation
console.log(manohar.lastName);
//Bracket Notation
console.log(manohar['lastName']);

const nameKey = 'Name';
console.log(manohar['first' + nameKey]);
console.log(manohar['last' + nameKey]);

//Adding new properties to the object
//using dot notation
manohar.location = 'India';
//using bracket notation
manohar['twitter'] = '@manoharacharyaa';
console.log(manohar);

console.log(`${manohar.firstName} has ${manohar.friends.length}, and his best friend is ${manohar.friends[0]}`);