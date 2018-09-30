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

硬解法:  
使用雙迴圈，在nums[i]時尋找nums[j] = target-nums[i] 回傳i,j。

HashTable:  
明顯硬解法時間複雜度是O(n^2)，使用HashTable去紀錄(利用物件的key)，即可在一個迴圈內找到。  
做法是，當迴圈跑到nums[i]時，如果 target-nums[i]還不在 Hash Table中，那就儲存{nums[i]:i}

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

如果我在跑到 2 的時候就先儲存 hash{2:0}，跑到7時，因為hash已經有9-7這個key，故可直接得到[0, 1]
```

## 解題

硬解法:
```
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
```

HashTable：
```
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
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)