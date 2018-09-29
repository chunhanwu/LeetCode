/**
 * @param {string} s
 * @return {boolean}
 */

let testString = '{[]}';

function isValid(s) {
    if (s.length === 0) {
        return true;
    }
    let stack = [];
    let match = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for (let i in s){
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[i])
            break
            case ')':
            case ']':
            case '}':
                if(match[s[i]] === stack[stack.length-1]){
                    stack.pop();
                } else {
                    return false
                }
            break
        }
    }
    return stack.length === 0
};


console.warn('input', testString);
console.warn('output', isValid(testString));