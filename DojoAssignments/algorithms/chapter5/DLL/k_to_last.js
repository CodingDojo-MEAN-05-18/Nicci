// Given k, return the value ‘k’ from a dList’s end. 
// (1) ->(2) ->(*)->(3) - first to last

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}
