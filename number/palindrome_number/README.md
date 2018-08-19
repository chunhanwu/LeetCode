# LeetCode 9. Palindrome Number

## 題目
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1 :
```
Input: 121
Output: true
```

Example 2 :
```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3 :
```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

Coud you solve it without converting the integer to a string?
## 翻譯

判斷一個整數是否是自己的迴文數，不能使用數字轉字串。 

## 思路

第一個想法或許是字串反轉然後檢查字串是否是回文數，但題目有限制住不可使用。  

而若直接判斷數字本身會有整數溢位問題，如[LeetCode 7](../reverse_integer/README.md) 所示，而為了避免溢位，我判斷一半的數字，畢竟數字如果是迴文數，前半段與後半段會相同。  

舉例來說輸入`1331`，後面的數字`31`反轉後是`13`，這與前半段的數字相同，可以知道此為迴文數。  
而在實作時想必會碰到一個問題，我如何得知已經「前半段」、「後半段」呢？  
我這邊用的想法是：若反轉後的數字>剩下的數字，即表示過了「邊線」，表示已經處理一半的數字了。  

另外還有兩種情況數字不可能為迴文數:
1. 負數 EX: -12
1. 除了0以外，結尾為0的數 EX: 120


## 解題

```
function isPalindrome(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }
    let rev = 0;
    while (num > rev) {
        rev = rev * 10 + num % 10;
        num = parseInt(num / 10)
    }
    return num === rev || num === parseInt(rev / 10);
    // num === parseInt(rev / 10)
    // 是指長度為奇數時，特別做處理
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)