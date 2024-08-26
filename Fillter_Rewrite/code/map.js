const array1 = [1, 4, 9, 16];
// Expected output: Array [2, 8, 18, 32]
 Array.prototype.mymap = function(num){
    let newarr = [];
    console.log(this);
    for(let i =0; i < this.length; i++){
        newarr.push(num(this[i],i,this));
    }
    return newarr;
    
 }

 const arr2 = array1.mymap((x) =>  x* 2);
 console.log(arr2);
 