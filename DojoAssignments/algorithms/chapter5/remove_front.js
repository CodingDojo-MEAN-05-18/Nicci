// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list.If list is empty, return null.

//always capitalize classes
// function Node(value){
//     this.val = value;
//     this.next = null;
// }
// Node.prototype.myMethod = function()

// //new makes a new instance of the NOde class. Makes an object defined by the function Node.
// let myNode = new Node('A');
// myNode.next = 'B';
// console.log(myNode);
// console.log(myNode.next);

//es6
class Node {
    //constructor is a method
    constructor(value){
        this.val = value;
        this.next = null;//next is a pointer
    }
}
//'this' is a reference to the object that called this function
class SList {
    constructor(){
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
    //2nd method available to use with class SList
    removeFront(){
        // if(!this.head){ //if the head is falsey (i.e. null)
        //     return this;
        // }

        if(this.head === null){
            return this;
        }
        let temp = this.head;
        //move the pointer from head to node head was pointing to
        this.head = this.head.next;  
        temp.next = null; // removes the pointer 
        return this;    
    }
}
let list = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list);

//add front method
let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');

let list_b = new SList();
list_b.addFront('3').addFront('2').addFront('1');
console.log('list_b: ' );
console.log(list_b);
// removeFront(list_b);
list_b.removeFront();
console.log('list_b : ' );
console.log(list_b);
let list_c = new SList();
// console.log(list_c);
console.log(list_c.removeFront());
console.log(list.removeFront());
