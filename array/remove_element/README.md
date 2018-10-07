# LeetCode 27. Remove Element

## 題目
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example1:
```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```
Example2:
```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```
## 翻譯

給一個陣列和一個數字，移除陣列中與數字相同的元素，然後回傳它的長度

不能使用其他的陣列空間，必需在本來的陣列中操作。

範例： nums = [0,1,2,2,3,0,4,2], val = 2,去除2之後，剩下[0,1,3,0,4]，回傳陣列的長度5。

## 思路

同樣使用count紀錄，當陣列中元素val重複，就跳過當前的元素，不重複就放在陣列中。

## 解題
```
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
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)