//Node class (what do they always have?)

class Node{
    constructor(value){
        this.val = value;
        this.next = null;//next is a pointer, we can assign to some node later on.
        
    }
}

//List Class (What does a list always have?)
class SList{
    constructor(){
        this.head = null;
        // a list must have start (head)
    }
    //methods avaiable ONLY to SList
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

    buildSLL(number){
        let count = 0;
        // let auto_list = new SList();
        while(count < number){
            this.addFront(count); 
            count ++;
        }
        return auto_list;
    }

    length(){
        let count = 0;
        let current = this.head;
        while(current){
            count ++;
            current = current.next;
        }
        return count;
    }
}

let list = new SList();
let list_b = new SList();
list.addFront('C').addFront('B').addFront('A');
console.log(list.length());
let auto_list = new SList();
console.log(auto_list.buildSLL(5));
console.log(auto_list.length());