Array.prototype.any = function(callback) {
    // Sử dụng vòng lặp for để kiểm tra từng phần tử
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true; // Trả về true nếu có ít nhất một phần tử thỏa mãn điều kiện
        }
    }
    return false; // Trả về false nếu không có phần tử nào thỏa mãn điều kiện
};

// Ví dụ sử dụng
const array1 = [1, 4, 9, 16];
const hasEven = array1.any(num => num % 2 === 0);
console.log(hasEven); // Kỳ vọng: true (vì 4, 16 là số chẵn)

const array2 = [1, 3, 5, 7];
const hasNegative = array2.any(num => num < 0);
console.log(hasNegative); // Kỳ vọng: false (không có số âm nào)
