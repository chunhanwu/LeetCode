# LeetCode 13. Roman to Integer

## 題目

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.  
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX + V + II`.  

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:  
* `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
* `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
* `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.  
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.


Example 1:
```
Input: "III"
Output: 3
```
Example 2:
```
Input: "IV"
Output: 4
```
Example 3:
```
Input: "IX"
Output: 9
```
Example 4:
```
Output: 58
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
```
Example 5:
```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## 翻譯

羅馬符號有以下代表數字: `I`, `V`, `X`, `L`, `C`, `D` 和 `M`.　　
```
符號       　　值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
舉例來說，`2`的羅馬數字為`II`，`12`為`XII`，`27`則寫作`XXVII`，意思是`XX + V + II`。　　

而羅馬數字通常由左到右代表由大到小，然而`4`的羅馬數字並不是`IIII`，而是已`IX`代替，原因則是`I`在`X`之前，所以`5-1`，相同的地方還有`9`寫成`IX`，以下有6個實例
* `I` 在 `V` (5) 和 `X` (10) 之前，則表示 `4` 和 `9` 。
* `X` 在 `L` (50) 和 `C` (100) 之前，則表示 `40` 和 `90` 。
* `C` 在 `D` (500) 和 `M` (1000) 之前，則表示 `400` 和 `900`。  

給一羅馬數字，轉為整數，這個數字一定落在1 到 3999 之間。　　

## 思路

## 解題

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)