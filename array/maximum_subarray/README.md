# LeetCode 53. Maximum Subarray

## 題目
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
Follow up:  

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
## 翻譯

給一個陣列，找到一個子陣列(至少有一個數字)，其總和為最大值並回傳。　　

如果寫好複雜度為O(n)的解了，試著用divide and conquer寫寫看。

## 思路
最簡單的想法就是[0] ~ [0]、[0] ~ [1] ... [0] ~ [N] ... [N] ~ [N]全部計算一下就可以了，在此不另行撰寫。  

這邊利用判斷總和(sum)是否大於0來與結果比較，時間複雜度為O(n)。
## 解題
```
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    let result = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    return result;
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)