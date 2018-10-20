# LeetCode 38. Count and Say

## 題目

The count-and-say sequence is the sequence of integers with the first five terms as following:
```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```
`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2`, then `one 1"` or `1211`.　　

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
## 翻譯

一個算&說出來的序列： 1,11,21,1211,111221
```
1     1個1， 下一個變成 11  
11    2個1， 也就是21  
21    1個2 1個1，得到1211
1211  1個1，1個2，2個1  111221  
```

## 思路
首先先判斷字串例如`1211`得到`111221`，我定義一個資料結構(stack)去紀錄值(value)與次數(count)，若是出現不同的數字，則重新數。

另外利用遞迴(Recursive)來處理次數，遞迴需要注意的是中止條件(本題為例則是定義`n=1`)。

## 解題
```
/**
 * @param {number} n
 * @return {string}
 */


function countAndSay(n) {
    if (n === 0) return '';
    if (n === 1) return '1';
    let inStr = countAndSay(n - 1);
    let outStr = '';
    let stack = {
            value : inStr[0],
            count : 1 };
    for (let i = 1; i <= inStr.length; i++) {
        if (inStr[i] === stack.value) {
            stack.count += 1;
        } else {
            outStr += stack.count + stack.value;
            stack.count = 1;
            stack.value = inStr[i];
        }
    }
    return outStr;
};
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)