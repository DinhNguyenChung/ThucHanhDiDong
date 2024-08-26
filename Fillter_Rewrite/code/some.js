Array.prototype.mysome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

// Ví dụ sử dụng
const array4 = [1, 2, 3, 4];
const hasOdd = array4.mysome(num => num % 2 !== 0);
console.log(hasOdd); // Kỳ vọng: true
