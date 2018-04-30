// front
// Return the value (not the node) at the head of the list.If list is empty, return null.

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList {
    constructor() {
        this.head = null;
    }
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
    //method to find value of the 1st node
    front(){
        let current = this.head;
        if(!current){
            return null;
        }
        let value = this.head.val;
        return value;
    }
}
let list = new SList();
let list_b = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list_b.front());
console.log(list.front());

