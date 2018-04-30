class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

//Speros used ES5
function List(){
    this.head = null;
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new List();
list.head = node1;

console.log(list);

function removeNode(list, value){
    if(list && list.head){
        var current = list.head;
        if(current.val === value){
            list.head = current.next;
            return current;
        }
        while(current.next){
            if(current.next.val === value){
                var temp = current.next;
                current.next = current.next.next;
                temp.next = null;
                return temp;
            }
            current = current.next;
        }
    }
    return null;
}

console.log(removeNode(list, 20));
console.log(list);