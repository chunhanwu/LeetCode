function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let count = 0;
    for (let i in nums) {
        if (nums[count] !== nums[i]) {
            nums[++count] = nums[i];
        }
    }
    return ++count;
};

let input = [2, 2, 7, 7, 11, 15];
console.warn('input', input);
console.warn('output', removeDuplicates(input))