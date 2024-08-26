//step 1
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
//step 2
var tips = [];
var totals = [];

//step 3
var calcTip = function(bill){
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    }
    return bill * 0.2;
}
for (var i = 0; i < bills.length; i++){
    var tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + tips[i]);
}
console.log('Bills',bills);
console.log('Tips',tips);
console.log('Totals',totals);