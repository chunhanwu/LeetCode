/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

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

let input_p = [1, 2]
let p_tree = buildTree(input_p)
let input_q = [1, null, 2]
let q_tree = buildTree(input_q)
console.warn('input_p', input_p);
console.warn('p_tree', p_tree);
console.warn('input_q', input_q);
console.warn('q_tree', q_tree);
console.warn('output', isSameTree(p_tree, q_tree));