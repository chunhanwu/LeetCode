# LeetCode 7. Reverse Integer

## 題目
Given a 32-bit signed integer, reverse digits of an integer.

Example 1 :
```
Input: 123
Output: 321

```

Example 2 :
```
Input: -123
Output: -321

```

Example 3 :
```
Input: 120
Output: 21

```

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,  2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
## 翻譯

迴轉一整數，若溢位0回傳即可。  

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
        if (hash[nums[i]] != undefined) {
            return [hash[nums[i]], i];
        } else {
            hash[target - nums[i]] = i;
        }
    }
    return false
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)