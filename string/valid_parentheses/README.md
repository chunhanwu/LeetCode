# LeetCode 20. Valid Parentheses

## 題目

Given a string containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.  
An input string is valid if:  
1. Open brackets must be closed by the same type of brackets.
1. Open brackets must be closed in the correct order.  

Note that an empty string is also considered valid.  

Example 1:
```
Input: "()"
Output: true
```
Example 2:
```
Input: "()[]{}"
Output: true
```  
Example 3:
```
Input: "([)]"
Output: false
```  
Example 4:
```
Input: "{[]}"
Output: true
```  

## 翻譯

給一個只包含`'('`,` ')'`, `'{'`, `'}'`, `'['` , `']'`這些括號字元的字串，判斷這些括號是否有效。 右括號必須依照正確的順序出現，"()" 與 "()[]{}" 都是有效的，但"(]" 和 "([)]"就不是。

## 解題

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)