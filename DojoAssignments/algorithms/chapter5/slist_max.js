// Create function​ ​min(node)​ and ​max(node)​ to returning smallest and largest values in the list.

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SList {
    constructor() {
        this.head = null;
        // must have a start, head
    }
    //add methods for SList
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
    min() {
        if (!this.head) {
            return null;
        } else {
            let current = this.head;
            let min = current.val;
            while (current) {
                if (current.val < min) {
                    min = current.val;
                }
                current = current.next;
            }
            return min;
        }
    }
    max() {
        if (!this.head) {
            return null;
        } else {
            let current = this.head;
            let max = current.val;
            while (current) {
                if (current.val > max) {
                    max = current.val;
                }
                current = current.next;
            }
            return max;
        }
    }
}

let list = new SList();
list.addFront(2).addFront('R').addFront(-9).addFront(0).addFront(7);
console.log(list.min());
console.log(list.max());