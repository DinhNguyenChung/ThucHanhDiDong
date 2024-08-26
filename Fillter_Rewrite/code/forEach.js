Array.prototype.myforEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Ví dụ sử dụng
const array5 = ['a', 'b', 'c'];
array5.myforEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

