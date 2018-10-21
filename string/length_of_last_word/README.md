# LeetCode 58. Length of Last Word

## 題目

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.
Example 1:
```
Input: "Hello World"
Output: 5
```

## 翻譯

給一個字串，其內容包換大小寫和空白，回傳最後一個單字的長度，如果沒有則回傳0。  

注意:單字的定義為一串沒有空白字元的序列組成。 

## 思路


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