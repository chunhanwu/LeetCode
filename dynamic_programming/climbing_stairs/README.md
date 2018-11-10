# LeetCode 70. Climbing Stairs

## 題目

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
Example 2:
```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
## 翻譯
爬樓梯，樓梯總共有n階。  

每一次可以爬一步或兩步，計算有幾種不同的方式可以到達樓頂。

提醒: n為正整數

## 思路
1. n = 1， result = 1
1. n = 2, result = 1+1 (爬1階兩次 + 一次爬兩階)
1. n = 3, result = 1+2 (前面兩個case相加)
1. n = 4, result = 3+2 (前面兩個case相加)
1. f(n) = f(n-1) + f(n-2)

## 解題
```
function climbStairs(n) {
    // if (n === 0) return 0
    // if (n === 1) return 1
    // if (n === 2) return 2
    // return climbStairs(n - 1) + climbStairs(n - 2)
    let result = 0, fn_1 = 1, fn_2 = 0

    for (let i = 1; i < n; i++) {
        result = fn_1 + fn_2    // f(n) = f(n-1) + f(n-2)
        fn_2 = fn_1             // f(n-1) = f(n-2) 
        fn_1 = result           // f(n-1) = f(n)
    }
    return result
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)