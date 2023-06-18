//V:40
//Basic Array operation(Methods)
const friends = ['Michael', 'Steven', 'Peter'];

//1.push(); (add elements to the end of an array)
console.log(friends);
console.log(friends.length);
friends.push('Maxwell');
//push function also returns value of length
const newLength = friends.push('David');
console.log(friends);
console.log(newLength);

//2.unshift(); (add elements to the start of an array)
friends.unshift('John');
console.log(friends);

//3.pop(); (removes element from the end of the array)
friends.pop();
console.log(friends);

//4.shift(); (removes elements to the start of an array)
friends.shift();
console.log(friends);

//5.indexOf(); (displays index of ellement in an array) 
console.log(friends.indexOf('David')); 
console.log(friends.indexOf('Maxwell')); 

//6.includes(); (ES6 method displays bool val)
console.log(friends.includes('Maxwell')); // if element is present = true
console.log(friends.includes('David'));  // if element is absent = false

if(friends.includes('Maxwell')){
    console.log("Maxwell is a good batter");
}