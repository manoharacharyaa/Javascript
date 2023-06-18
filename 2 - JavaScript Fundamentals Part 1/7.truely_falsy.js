//TRUTHY AND FALSY VALUES

//there are 5 falsy values 
//Falsy values: 0, '', undefined, null, NaN(Not a Number) apart from this rest are truely values
//the values are not false initially but will become false when converted to boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Manohar'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("don't spend it all");
} else {
    console.log("you shoukld get a job!");
}
//here 0 is a falsy value so the else block is printed

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}
//height is a undefined value so the else block is printed