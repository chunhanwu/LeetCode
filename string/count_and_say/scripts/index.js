/**
 * @param {number} n
 * @return {string}
 */


function countAndSay(n) {
    if (n === 0) return '';
    if (n === 1) return '1';
    let inStr = countAndSay(n - 1);
    let outStr = '';
    let stack = {
            value : inStr[0],
            count : 1 };
    for (let i = 1; i <= inStr.length; i++) {
        if (inStr[i] === stack.value) {
            stack.count += 1;
        } else {
            outStr += stack.count + stack.value;
            stack.count = 1;
            stack.value = inStr[i];
        }
    }
    return outStr;
};

console.warn('input', 3);
console.warn('output', countAndSay(4));