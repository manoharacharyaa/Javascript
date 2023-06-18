
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0])];
console.log(bills, tips);
const totals = [bills[0] + tips[0]];
console.log(totals);