// Node class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linked List class
class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print List
    printLinkedList(){
        let current = this.head;
        console.log(current);
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedList();

list.append('A');
list.append(2);
list.append('B');
list.append('3');


list.printLinkedList();