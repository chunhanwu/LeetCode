# LeetCode 26. Remove Duplicates from Sorted Array

## 題目
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:
```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```
## 翻譯

給一個排序過的陣列，移除重複的值，每個元素只能留下一個。

不能使用其他的陣列空間，必需在本來的陣列中操作。

範例： [1,1,2] 去除重複的1之後，剩下[1,2]，回傳陣列的長度2。

## 思路

使用count紀錄不重複元素，當陣列中下一個元素與當前的元素重複，就跳過當前的元素，不重複就放在陣列中。

## 解題
```
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
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)