//Functions: block of code which we can use again and again
//Dont Repeat Yourself (DRY)
//Note: functions are the values which we can store in any variable

//creating a function
function logger() {
    console.log("My name is Manohar");
}

//functioncall/invoking a function
logger(); 
logger(); 
logger();

//function can recieve & return the data
//passing parameters to functions
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//function call by passing in parameters/arguments
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(3, 2);
console.log(appleJuice);
console.log(fruitProcessor(3, 2));