/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
};

function buildList(nodes) {
    let head = new ListNode(null);
    let list = head;
    for (let node of nodes) {
        list.next = new ListNode(node);
        list = list.next;
    }
    return head.next;
};
function convertArray(ListNode) {
    const arr = []
    while (ListNode) {
        arr.push(ListNode.val)
        ListNode = ListNode.next
    }
    return arr
}

function deleteDuplicates(head) {
    return head
};

let ListNode1 = [1, 2, 4];

console.warn('input1', ListNode1);
console.warn('output', deleteDuplicates(ListNode1));