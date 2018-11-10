# LeetCode 66. Plus One

## 題目
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1 :
```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

Example 2 :
```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```
## 翻譯

給一個不為空的陣列，他代表一個非負的整數，對這個數字加一。  

這個列表的開頭必須儲存有效的數字，並且陣列中每個元素都只有單個數字。  

你可以假設除了0以外，陣列第一個數字不為0。


## 思路

從陣列最後一個位數開始，該數+1，判斷是否大於10，表示進位，若進位則處理10位數(倒數第二個)。  

最後在判斷第一個數字是否為0，為0則表示進位。

## 解題

```
function plusOne(digits) {
    // 從最後一個位數開始，該數+1
    // 若大於10表示進位，若小於則跳出  
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            break;
        }
        digits[i] -= 10;
    }
    // 若第一位為0 則表示需多一個位數
    digits[0] === 0 && digits.unshift(1);
    return digits
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)