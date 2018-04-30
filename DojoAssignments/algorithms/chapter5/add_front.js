// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// function add_front(){

// }

// console.log(add_front);
let first = {
    val: 1,
    next: null
}

let second = {
    val: 2,
    next: null
}

let third = {
    val: 3,
    next: null,
}
first.next = second;
second.next = third;
// console.log(second.next);
// console.log(first.next.next);

let node99 = {
    val: 99,
    next: null
}
first.next = node99;
node99.next = second;
console.log(first);
console.log(second);
console.log(second.next);
console.log(first.next.next.next.next);//points to end of SLL
//es6
class Node {
    //constructor is a method
    constructor(value) {
        this.val = value;
        this.next = null;//next is a pointer
    }
}
//'this' is a reference to the object that called this function
class SList {
    constructor() {
        this.head = null;
    }
    //method
    addFront(data) {
        let n = new Node(data);
        if (!this.head) {
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        return this;
    }
}
let list = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list);

