// //we always capitalize class - here we capitalize ListNode class

// function ListNode(value){
//     this.val = value;
//     this.next = null;
//     //add a function but this is bad! uses too much memory as it does this every instance
//     this.myMethod = function(){
//     }
// }
// Node.prototype.myMethod = function()

// const myNode = new ListNode('A');
// myNode.next = 'B';
// myNode.next.next = null;
// console.log(myNode);


// function addFront(data) {
//     var n = new Node(data)
//     if (this.isEmpty()) {
//         this.head = n;
//     } else {
//         n.next = this.head;
//         this.head = n;
//     }
//     return this;
// }
// console.log(addFront());

// ES6

class ListNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
//head and next are just pointers in the SLL object
// our list has "head" property our Node does NOT have a head
class SList {
    constructor(){
        this.head = null; //initialize with null
    }
// key word 'this' is a reference to the object that called the function
    addFront(data){
        const new_node = new ListNode(data);
        console.log(new_node);
        if(!this.head){
            this.head = new_node;
        }
        new_node.next = this.head;
        this.head = new_node;
    }
}

var list = new SList();
console.log(list);
list.addFront('c');
console.log(list);


// from my book
// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next: null
//         };
//         this.length = 1;
//     }
// }
// console.log(new LinkedList('Hello!'));
// // -> { head: { value: 'Hello!', next: null } }