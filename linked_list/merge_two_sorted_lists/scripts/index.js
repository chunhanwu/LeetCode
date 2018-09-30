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

let ListNode1 = [1, 2, 4];
let ListNode2 = [1, 3, 4];

console.warn('input1', ListNode1);
console.warn('input2', ListNode2);
console.warn('output', convertArray(mergeTwoLists(buildList(ListNode1), buildList(ListNode2))));