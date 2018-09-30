/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let ListNode1 = [1, 2, 4];
let ListNode2 = [1, 3, 4];

function mergeTwoLists(l1, l2) {
    console.warn('l1', l1)
    console.warn('l2', l2)
    return l1
};


console.warn('input1', ListNode1);
console.warn('input2', ListNode2);
console.warn('output', mergeTwoLists(ListNode1, ListNode2));