# LeetCode 100. Same Tree

## 題目

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```
Example 2:
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```  
Example 3:
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```  


## 翻譯

給定兩個二元樹，判斷這兩個樹的每一個節點中的值與節點位置是否都相同。

## 思路

比較兩個node的值，如果兩個都是null則表示比較完畢回傳true

## 解題

題目定義二元樹型態
```
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
```
將陣列轉為二元樹
```
function buildTree(nodes) {
    function build(i) {
        if (nodes[i] !== null && nodes[i] !== undefined) {
            let node = new TreeNode(nodes[i]);
            node.left = build(i * 2 + 1);
            node.right = build((i + 1) * 2);
            return node;
        } else {
            return null;
        }
    };
    return build(0);
};
```
比較二元樹每個節點是否相同，leetcode只需撰寫這部分即可
```
function isSameTree(p, q) {
    // 若是p和q為null表示已經比較完，節點內容完全相通
    if (p === null && q === null) {
        return true;
    }
    // 若是只有一方為null，表示內容不相同
    if (p === null || q === null) {
        return false;
    }
    // 比較節點上的值
    if (p.val != q.val) {
        return false;
    }
    // 表示節點上值相同，繼續比較二元樹的下一個左右的點。
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)