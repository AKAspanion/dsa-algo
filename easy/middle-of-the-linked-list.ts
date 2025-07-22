//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let curr = head;
  let len = 0;
  while (curr && curr.next) {
    curr = curr.next;
    len++;
  }

  curr = head;
  for (let i = 0; i < len / 2; i++) {
    if (curr && curr.next) {
      curr = curr.next;
    }
  }
  return curr;
}

console.log(middleNode(null));
console.log(middleNode(new ListNode(1)));
