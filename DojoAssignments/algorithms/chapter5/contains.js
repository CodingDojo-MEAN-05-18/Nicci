// contains
// Given a pointer to a listNode and a value, return whether value is found in any node within the list. 

class Node {
    constructor(value){
        this.val = value;
        this.next = null;//next is a pointer
    }
}

class SList {
    constructor(){
        this.head = null;
    }
    //method to add to beginning of list 
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
    //contains method
    contains(search){
        // console.log(this.head.val + " : head value");
        let current = this.head;
        if(!current){
            if(this.head.val === search){
                return true;
            } else {
                return false; 
            }
        } else {
            while(current){
                if (current.val === search){
                    return true;
                } 
                current = current.next;
            }
            return false;
        }
        // return this;
    }
}
let list = new SList();
let list_b = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list);
console.log(list.head.next.val);
console.log(list.contains('A'));
console.log(list.contains('B'));
console.log(list.contains('1'));
// console.log(list_b.contains('1'));