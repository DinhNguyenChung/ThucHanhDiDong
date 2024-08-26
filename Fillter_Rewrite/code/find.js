Array.prototype.myfind = function(callback) {
  for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
          return this[i];
      }
  }
  return undefined;
};

// Ví dụ sử dụng
const array1 = [5, 12, 8, 130, 44];
const found = array1.myfind(element => element > 10);
console.log(found); // Kỳ vọng: 12
