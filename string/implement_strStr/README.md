# LeetCode 28. Implement strStr()

## 題目
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example1:
```
Input: haystack = "hello", needle = "ll"
Output: 2
```
Example2:
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```
## 翻譯

實現strStr() (在c中是strstr(), js則是indeOf())  

給一個指針(needle)與一個堆疊(haystack)，回傳needle第一次在haystack出現的位，若沒有則回傳-1。

## 思路
實作indexOf的功能，首先利用string.substr()擷取字串長度，比對needle===string.substr()即可。
## 解題
```
function strStr(haystack, needle) {
    if (!needle) {
        return 0
    }
    let haystackLength = haystack.length
    let needleLength = needle.length
    if (!haystack || haystackLength < needleLength) {
        return -1
    }

    for (let i = 0; i < haystackLength - needleLength + 1; i++) {
        let str = haystack.substr(i, needleLength)
        if (str === needle) {
            return i
        }
    }
    return -1;
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)