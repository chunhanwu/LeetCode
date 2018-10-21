/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
    let arr = s.split(/\s+/)
    let res = arr[arr.length - 1].length
    if (res === 0) {
        res = arr[arr.length - 2].length
    }
    return res;
};


console.warn('input', 'Hello World!');
console.warn('output', lengthOfLastWord('Hello World! '));