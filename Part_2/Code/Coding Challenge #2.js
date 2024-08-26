var sumBills = function(bills){
    var sum = 0;
    for (var i = 0; i < bills.length; i++){
        sum += bills[i];
    }
    return sum;
}

var checkSumBills = function(sumBills){
    if(sumBills >= 50 && sumBills <= 300){
        return true;
    }
    return false;
}
var tipCalculator = function(checkSumBill, sumBills){
    if(checkSumBill){
        return sumBills * 0.15;
    }
    return sumBills * 0.2;

}
var bills = [125, 555, 44];
var sum = sumBills(bills);
var checkSumBill = checkSumBills(sum);
var tip = tipCalculator(checkSumBill,sum);
console.log(`Tiền tip là ${tip}`);
console.log(`Tổng tiền hoá đơn là ${sumBills(bills)} + tiền tip là ${tipCalculator(checkSumBill,sum)} = ${sumBills(bills) + tip}`);