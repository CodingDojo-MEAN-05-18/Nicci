// Create function​ ​min(node)​ and ​max(node)​ to returning smallest and largest values in the list.

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SList {
    constructor(){
        this.head = null;
        // must have a start, head
    }
    //add methods for SList
    addFront(data){
        let n = new Node (data);
        if (!this.head){
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        return this;
    }
    range(){
        let obj = {
            min : 'min',
            max : 'max',
        }
        if(!this.head){
            return null;
        } else {
            let current = this.head;
            let min = current.val;
            let max = current.val;
            obj.max = current.val;
            obj.min = current.val;
            while(current){
                if (current.val < obj.min ){
                    obj.min = current.val;
                }
                if (current.val > obj.max){
                    obj.max = current.val;
                }
                current = current.next;
            }
            return obj;
        }
    }
}

let list = new SList();
list.addFront(2).addFront(0).addFront(-9).addFront(0).addFront(7);
console.log(list.range());