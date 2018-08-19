let a = [2, 7, 11, 15];
let b = 13;

function twoSumByBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j];
            }
        }
    }
    return false
};

function twoSumByHashTable(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    return false
};

console.warn('a', a);
console.warn('b', b);
console.warn('twoSumByBruteForce', twoSumByBruteForce(a, b));
console.warn('twoSumByHashTable', twoSumByHashTable(a, b));