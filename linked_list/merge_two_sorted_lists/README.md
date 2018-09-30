# LeetCode 21. Merge Two Sorted Lists

## 題目

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example 1:
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
## 翻譯
將兩個排好的連結串列連成一個新的連結串列

## 思路
讀取兩個input目前的值做比較，如果L1.val < L2.val，將當前的L1節點加入新的連結串列(result)，然後L1指向下一個節點。

直到L1或L2一方為null則停止，並將剩下的那個加入剩下的節點
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