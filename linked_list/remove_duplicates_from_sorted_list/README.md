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
function mergeTwoLists(l1, l2) {
    let result = new ListNode(null);
    // 目前Node位置
    let currentNode = result;

    while (l1 && l2) {
        // l1,l2較小的數加入result
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next
        }
        currentNode = currentNode.next;
    }

    //將l1,l2剩下的Node加到result
    if (l1 !== null) {
        currentNode.next = l1;
    }
    if (l2 !== null) {
        currentNode.next = l2;
    }
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
在leetcode上，只需撰寫mergeTwoLists即可，其他都是方便閱讀者閱讀。

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)