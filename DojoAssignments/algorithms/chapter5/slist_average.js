// Create a standalone function ​average(node) that returns (...wait for it ... ) the ​average​ of all values contained in that list.
 
class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList {
    constructor(){
        this.head = null;
        //a list must have a start (head)
    }
    addFront(data){
        let n = new Node(data);
        if (!this.head){
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        return this;
    }

    average(){
        let sum = 0;
        let count = 0;
        let current = this.head;
        if(!this.head){
            return null;
        } else {
            while(current){
                count ++;
                console.log(sum);
                sum = sum + current.val;
                current = current.next;
            }
        }
        return sum/count;
    }
}

let list = new SList();
let list_b = new SList();
list.addFront(4).addFront(2).addFront(1);
console.log(list.average());
console.log(list_b.average());