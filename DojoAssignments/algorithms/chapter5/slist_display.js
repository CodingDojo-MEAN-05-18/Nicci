// Create display(node) for debugging that returns a string containing all list values.Build what you wish console.log(myList) did!÷
class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList {
    constructor(){
        this.head = null;
        //need a start, the head
    }
    //methods accessible to SList only
    addFront(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }
    concat(){
        let curr = this.head;
        let concat = '';
        if(!this.head){
            return null;
        }
        else {
            while(curr){
                concat = concat + curr.val;
                curr = curr.next;
            }
        }
        return concat;
    }
}
let list = new SList;
console.log(list.addFront('say ').addFront('hi ').addFront(' nic ').concat());