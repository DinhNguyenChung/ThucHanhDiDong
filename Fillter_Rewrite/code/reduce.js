Array.prototype.myreduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

// Ví dụ sử dụng
const array2 = [1, 2, 3, 4];
const sum = array2.myreduce((acc, val) => acc + val, 0);
console.log(sum); // Kỳ vọng: 10
