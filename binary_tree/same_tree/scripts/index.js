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
    console.warn('p', p)
    console.warn('q', q)
    return 0
};

let input_p = [1, 2, 3]
let p_tree = buildTree(input_p)
let input_q = [1, 4, 3]
let q_tree = buildTree(input_q)
console.warn('input_p', input_p);
console.warn('p_tree', p_tree);
console.warn('input_q', input_q);
console.warn('q_tree', q_tree);
console.warn('output', isSameTree(p_tree, q_tree));