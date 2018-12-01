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


function isSameTree(p, q) {
    console.warn('p', p)
    console.warn('q', q)
    return 0
};

let input_p = [1, 2, 3]
let input_q = [1, 2, 3]
console.warn('input_p', input_p);
console.warn('input_q', input_q);
console.warn('output', isSameTree(input_p, input_q));