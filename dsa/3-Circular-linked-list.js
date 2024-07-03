// Create Node class
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Create Circular linked list class
class CircularLinkedList {
    constructor(){
        this.head = null;
    }

    // Add node at the end of the list
    append(data){
        let newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.head.next = this.head;
        } else {
            let current = this.head;
            while(current.next !== this.head){
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    // Method to print linked list
    printAllList(){
        if(this.head === null){
            return;
        }
        let current = this.head;
        do{
            console.log(current.data);
            current = current.next;
        } while(current !== this.head)
        
    }
}


let list  = new CircularLinkedList();

list.append('A');
list.append('1');

list.printAllList();