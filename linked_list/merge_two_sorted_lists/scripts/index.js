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

let testString = '{[]}';
let testString2 = '{[!!]}';

function mergeTwoLists(l1, l2) {
    console.warn('l1', l1)
    console.warn('l2', l2)
};


console.warn('input1', testString);
console.warn('input2', testString);
console.warn('output', mergeTwoLists(testString, testString2));