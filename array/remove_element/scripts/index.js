/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
    let count = 0;
    for (let i in nums) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
            // 等效於
            // nums[count] = nums[i];
            // count++;
        }
    }
    return 0;
};

let input_nums = [0, 1, 2, 2, 3, 0, 4, 2];
let input_val = 2
console.warn('input_nums', input_nums);
console.warn('input_val', input_val);
console.warn('output', removeElement(input_nums, input_val))