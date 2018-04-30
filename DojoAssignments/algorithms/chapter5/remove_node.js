class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList{
    constructor(){
        this.head = null;
    }
    addFront(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        } else {
            node.next = this.head;
            this.this = node;
        }
        return this;
    }
    removeNodeByPosition(position){
        let curr = this.head;
        let count = 0;
        if(!this.head){
            return curr;
        } else {
            while(curr){
                count ++;
                if (count === position){
                    let temp = curr.next;
                    curr = curr.next.next;
                    temp = null;
                }
                curr = curr.next;
            }
        }
        return null;
    }
}

let list = new SList();
// list.addFront(4).addFront(2).addFront('no').addFront(1).addFront('yes');
list.addFront('no').addFront(1).addFront('yes');
console.log(list);
console.log(list.removeNodeByPosition(3));
console.log(list);

