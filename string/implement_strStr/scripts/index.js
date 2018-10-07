/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
    if (!needle) {
        return 0
    }
    let haystackLength = haystack.length
    let needleLength = needle.length
    if (!haystack || haystackLength < needleLength) {
        return -1
    }

    for (let i = 0; i < haystackLength - needleLength + 1; i++) {
        let str = haystack.substr(i, needleLength)
        if (str === needle) {
            return i
        }
    }
    return -1;
};

let input_haystack = 'hello';
let input_needle = 'lo'
console.warn('input_haystac', input_haystack);
console.warn('input_needle', input_needle);
console.warn('output', strStr(input_haystack, input_needle))