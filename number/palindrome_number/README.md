# LeetCode 7. Reverse Integer

## 題目
Given a 32-bit signed integer, reverse digits of an integer.

Example 1 :
```
Input: 123
Output: 321
```

Example 2 :
```
Input: -123
Output: -321
```

Example 3 :
```
Input: 120
Output: 21
```

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>,  2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
## 翻譯

回轉一整數，若溢位回傳0即可。  

## 思路

一般想法分為Number解與String解，以下分別介紹  

Number:  
毫無疑問，第一想法為用while不斷除10，這邊要注意的是溢位問題，這邊利用一個很不錯的技巧，在即將溢位時判斷最後一個數字大小，詳細如程式碼所述

String:  
也可以將數字轉為字串，後反轉，這邊要注意的是負數的情況，需要另外去處理，這邊我利用``Math.sign``去處理，另外關於溢位的問題，我認為在溢位時去判斷是否大於最大值是一種不太恰當的方法(大於溢位值還拿來做判斷?)，而且這其實是數字的問題，使用string，會多使用額外空間。

## 解題

Number:
```
const maxVaule = 2 ** 31 - 1;  // 2147483647
const minVaule = -1 * 2 ** 31; //-2147483648

function reverseByMath(num) {
    let res = 0
    while (num !== 0) {
        let pop = num % 10;
        num = parseInt(num / 10);
        if (res > parseInt(maxVaule / 10) || (res === parseInt(maxVaule / 10) && pop > 7)) {
            return 0
        }
        if (res < parseInt(minVaule / 10) || (res === parseInt(minVaule / 10) && pop < -8)) {
            return 0
        }
        res = res * 10 + pop;
    }
    return res;
};
```
這邊特別說明程式碼7和-8的狀況，這跟2147483647與-2147483648的最後一個數字有關。  

String:  
```
const maxVaule = 2 ** 31 - 1;  // 2147483647
const minVaule = -1 * 2 ** 31; //-2147483648
function reverseByString(num) {
    let reversedInt = (+String(Math.abs(num)).split('').reverse().join('')) * Math.sign(num);
    return (reversedInt < minVaule || reversedInt > maxVaule) ? 0 : reversedInt
};
```
這邊說明一下  
stringObject.split() : 將字串分開
```
let num = 123
num.split('') // ["1","2","3"]
```
arrayObject.reverse() : 將陣列回轉
```
let array = ["1","2","3"]
array.reverse(') // ["3","2","1"]
```
arrayObject.join('') : 將陣列重組
```
let array = ["3","2","1"]
array.join(') // "321"
```
[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)