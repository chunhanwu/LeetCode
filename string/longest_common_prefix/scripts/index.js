/**
 * @param {string[]} strs
 * @return {string}
 */
let input = ["flower", "flow", "flight"];
function longestCommonPrefix(strs) {
    if (!strs.length && strs === undefined) return ''
    let prefix = ''
    let potential = ''

    for (let char of strs[0]) {
        potential += char
        if (strs.every(str => str.substring(0, potential.length) === potential)) {
            prefix = potential
        } else {
            break
        }
    }
    return prefix
};

console.warn('input', input);
console.warn('output', longestCommonPrefix(input));
