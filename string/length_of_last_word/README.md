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
使用split並利用正規表示法以`' '`將字串隔開，並判斷最後一個陣列內容的長度(0表示`' '`)，若0表示字串內容最後為空白，則需取倒數第二個，即最後一個單字。
## 解題
```
/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
    let arr = s.split(/\s+/)
    let res = arr[arr.length - 1].length
    if (res === 0) {
        res = arr[arr.length - 2].length
    }
    return res;
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)