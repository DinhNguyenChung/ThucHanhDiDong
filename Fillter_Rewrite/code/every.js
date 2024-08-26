Array.prototype.myevery = function(callback) {
  for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
          return false;
      }
  }
  return true;
};

// Ví dụ sử dụng
const array3 = [2, 4, 6, 8];
const allEven = array3.myevery(num => num % 2 === 0);
console.log(allEven); // Kỳ vọng: true
