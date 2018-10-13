# LeetCode 35. Search Insert Position

## 題目
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example1:
```
Input: [1,3,5,6], 5
Output: 2

```
Example2:
```
Input: [1,3,5,6], 2
Output: 1

```
Example3:
```
Input: [1,3,5,6], 7
Output: 4

```
Example4:
```
Input: [1,3,5,6], 0
Output: 0

```
## 翻譯

給一個陣列與目標值，如果這個目標值在陣列中存在，則回傳他的位置，若無，在照順序插入並回傳位置。

你可以假設陣列的值不會重複。

## 思路

先判斷target是否大於最後一個值(最大值)，如果大於則直接回傳位置，若無則很簡單的判斷target在陣列中小於哪個值，回傳其位置即可。

## 解題
```
function searchInsert(nums, target) {
    if (target>nums[nums.length-1]) 
    return nums.length

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=target) 
        return i
    }
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)