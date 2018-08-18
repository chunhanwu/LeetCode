# LeetCode 1. Two Sum

## 題目
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

```
## 翻譯

給一個整數的陣列，陣列中會有兩個元素加起來等於target，回傳這兩個元素的位置。

你可以假設一定會有解，而且相同的元素不可使用兩次。

## 思路

硬解法:  
使用雙迴圈，尋找nums[i]+nums[j] = target 回傳i,j。

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
        if (target - nums[i] in hash) {
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