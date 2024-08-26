const calcAverage = (a,b,c) =>(a+b+c)/3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);


var checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas *2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= avgDolphins *2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log("No team wins");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));