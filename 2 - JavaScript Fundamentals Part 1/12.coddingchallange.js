let bill = 250
let tip = bill * 15 / 100

//Using if else
if (bill >= 50 && bill <= 300) {
    console.log(`Tip amount is ${tip}, bill amount is ${bill} and total ammount is ${bill + tip}`);
}else {
    console.log(`Tip amount is ${tip2 = bill * 20 /100}, bill amount is ${bill} and total ammount is ${bill + tip2}`);
}

//Using ternary 
const tip3 = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Tip amount is ${tip3}, bill amount is ${bill} and total ammount is ${bill + tip3}`);