/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
    // 從最後一個位數開始，該數+1
    // 若大於10表示進位，若小於則跳出  
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            break;
        }
        digits[i] -= 10;
    }
    // 若第一位為0 則表示需多一個位數
    digits[0] === 0 && digits.unshift(1);
    return digits
};

console.warn('input', [9, 9, 9, 9])
console.warn('output', plusOne([9, 9, 9, 9]))
