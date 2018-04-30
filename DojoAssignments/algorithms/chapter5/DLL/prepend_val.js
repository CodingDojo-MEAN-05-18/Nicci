// Given dList, new value, and existing value, insert new val into dList immediately before existing val. 

function dList(){
    this.head = null;
    this.tail = null;
}
function dLNode(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

var node1 = new dLNode(1);
var node2 = new dLNode(2);
var node3 = new dLNode(3);
var node4 = new dLNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node2.prev = node1;
node3.prev = node2;
node4.prev = node3

var dlist = new dList();
dlist.head = node1;
dlist.tail = node4;


function prepend_val(list, new_val, node){
    let curr = this.head;
    let count = 1;
    if(list){
        let newNode = new dLNode(new_val);
        if(list.head){
            let temp = list.head;
            list.head = newNode;
            list.tail = newNode;
            newNode.next = temp;
            temp.prev = newNode;
        }

    }
        while(curr){
            if(count === node){
                temp = node.head.val;
                temp2 = node.head.prev;
                node.head.val = new_val;
                node.head.prev = node.head

            } 
            count ++;
            curr = curr.next;              
        }
    return this.dlist;
}