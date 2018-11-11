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

let ListNode1 = [2, 2, 3, 4, 4];

console.warn('input1', ListNode1);
console.warn('output', deleteDuplicates(buildList(ListNode1)));