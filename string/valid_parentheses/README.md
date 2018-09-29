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

## 思路
利用堆疊(stack)的概念來解(先進後出)，若輸入為`'('`,`'['`,`'{'`則放入堆疊，若是輸入為`')'`,`']'`,`'}'`則看堆疊最後一個是否與其match，最後判斷堆疊長度，若為有效的字串，長度為0。

## 解題
```
function isValid(s) {
    if (s.length === 0) {
        return true;
    }
    let stack = [];
    let match = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for (let i in s){
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[i])
            break
            case ')':
            case ']':
            case '}':
                if(match[s[i]] === stack[stack.length-1]){
                    stack.pop();
                } else {
                    return false
                }
            break
        }
    }
    return stack.length === 0
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)