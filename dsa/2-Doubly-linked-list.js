// Node class
class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Doubly linked list class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add node at the end of the list
    append(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            console.log(this.tail);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            console.log(this.tail);
        }
    }

    printList() {
        let current = this.head;
        console.log(this.head);
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    printListReverse() {
        let current = this.tail;
        while(current){
            console.log(current.data);
            current = current.prev;
        }
    }
}

let list = new DoublyLinkedList();

list.append('A');
list.append('B');
list.append('C');

list.printList();

// list.printListReverse();