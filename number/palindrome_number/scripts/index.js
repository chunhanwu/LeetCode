
let testNum = -131;

function isPalindrome(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }
    let rev = 0;
    while (num > rev) {
        rev = rev * 10 + num % 10;
        num = parseInt(num / 10)
    }
    return num === rev || num === parseInt(rev / 10);
    // num === parseInt(rev / 10)
    // 是指長度為奇數時，特別做處理
};

console.warn('testNum', testNum)
console.warn('isPalindrome(testNum)', isPalindrome(testNum))