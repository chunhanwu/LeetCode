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

而若直接判斷數字本身會有整數溢位問題，如LeetCode 7所示，而為了避免溢位，我判斷一半的數字，畢竟數字如果是迴文數，前半段與後半段會相同。  
舉例來說輸入`1331`，後面的數字`31`反轉後是`13`，這與前半段的數字相同，可以知道此為迴文數。  
而在實作時想必會碰到一個問題，我如何得知已經「前半段」、「後半段」呢？  
我這邊用的想法是：若反轉後的數字>剩下的數字，即表示過了「邊線」，表示已經處理一半的數字了。


## 解題

Number:
```
const maxVaule = 2 ** 31 - 1;  // 2147483647
const minVaule = -1 * 2 ** 31; //-2147483648

function isPalindrome (num) {
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