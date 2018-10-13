/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
    if (target>nums[nums.length-1]) 
    return nums.length

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=target) 
        return i
    }
};

let input_nums = [1, 3, 5, 6];
let input_target = 0;
console.warn('input_nums', input_nums);
console.warn('input_target', input_target);
console.warn('output', searchInsert(input_nums, input_target));
