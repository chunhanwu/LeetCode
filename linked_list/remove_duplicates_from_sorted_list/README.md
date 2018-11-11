# LeetCode 83. Remove Duplicates from Sorted List

## 題目

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
```
Input: 1->1->2
Output: 1->2
```
Example 1:
```
Input: 1->1->2->3->3
Output: 1->2->3
```
## 翻譯
給一個連結串列，刪除重複的節點

## 思路
在開始前，我先舉個簡單例子以便閱讀程式碼，因為我自己也很容易搞混
```
let index1 = {'a':1,'b':2}
let index2 = index1 // index2 = {'a':1,'b':2}
index2.b = {'a':3,'b':4}
// index1 = {'a':1,'b':{'a':3,'b':4} }
// index2 = {'a':1,'b':{'a':3,'b':4} }
index2 = index2.b
// index1 = {'a':1,'b':{'a':3,'b':4} }
// index2 = {'a':3,'b':4}
index2.b = { 'a': 5, 'b': 6 }
// index1 = {'a':1,'b':{'a':3,'b':{'a':5,'b':6}} }
// index2 = {'a':3,'b':{ 'a': 5, 'b': 6 }}
index2 = index2.b
// index1 = {'a':1,'b':{'a':3,'b':{'a':5,'b':6}} }
// index2 = { 'a': 5, 'b': 6 }
```
希望以上例子可以方便閱讀者方便理解，理解後應該就很簡單解題了，只有判斷該node上的val是否與head.val相等就可以了。  
本題許多程式碼與[LeetCode 21. Merge Two Sorted Lists](../merge_two_sorted_lists/README.md) 相同，如果理解僅需閱讀`deleteDuplicates`即可。
## 解題
首先先定義node內容，在這邊leetcode上已定義
```
function ListNode(val) {
    this.val = val;
    this.next = null;
};
```
再來因為輸入為連結串列，故先將陣列(本範例使用陣列)轉為連結串列
```
function buildList(nodes) {
    let head = new ListNode(null);
    let list = head;
    for (let node of nodes) {
        list.next = new ListNode(node);
        list = list.next;
    }
    return head.next;
};
```
排列成新的連結串列
```
function deleteDuplicates(head) {
    if (head === null || head.next === null) return head;
    let result = new ListNode(null);
    // 目前Node位置
    let currentNode = result;
    while (head) {
        if (head.val !== currentNode.val) {
            currentNode.next = head;
            currentNode = currentNode.next
        }
        head = head.next;
    }
    currentNode.next = null
    let index1 = { 'a': 1, 'b': 2 }
    let index2 = index1
    return result.next
};
```
實際上回傳的值已經為連結串列，但為了方便觀看結果，我將他轉為陣列方便觀看
```
function convertArray(ListNode) {
    const arr = []
    while (ListNode) {
        arr.push(ListNode.val)
        ListNode = ListNode.next
    }
    return arr
}
```
在leetcode上，只需撰寫deleteDuplicates即可，其他都是方便閱讀者閱讀。

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)