/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    // if (n === 0) return 0
    // if (n === 1) return 1
    // if (n === 2) return 2
    // return climbStairs(n - 1) + climbStairs(n - 2)
    let result = 0, fn_1 = 1, fn_2 = 0

    for (let i = 1; i < n; i++) {
        result = fn_1 + fn_2 // f(n) = 
        fn_2 = fn_1
        fn_1 = result
    }
    return result
};


console.warn('input', 6);
console.warn('output', climbStairs(6))