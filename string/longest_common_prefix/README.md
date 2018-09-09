# LeetCode 14. Longest Common Prefix

## 題目

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

Example 1:
```
Input: ["flower","flow","flight"]
Output: "fl"
```
Example 2:
```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```  
Note:  
All given inputs are in lowercase letters `a-z`.

## 翻譯

一個陣列中有許多個字串，找出這些字串最長的共同字首，若沒有，則回傳空白字串。

注意：所以輸入都是小寫。  

## 思路
選擇一字串逐一比對，這裡選擇使用str.every()，直到出現false(表示不再有共同字首)，則回傳該值
```
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```
## 解題
```
/**
 * @param {string[]} strs
 * @return {string}
 */
let input = ["flower", "flow", "flight"];
function longestCommonPrefix(strs) {
    if (!strs.length && strs === undefined) return ''
    let prefix = ''
    let potential = ''

    for (let char of strs[0]) {
        potential += char
        if (strs.every(str => str.substring(0, potential.length) === potential)) {
            prefix = potential
        } else {
            break
        }
    }
    return prefix
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)