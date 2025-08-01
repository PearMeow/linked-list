console.log("This is some template text");

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    append(value) {
        if (this.size === 0) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
        ++this.size;
    }

    prepend(value) {
        if (this.size === 0) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            let newHead = new Node(value, this.head);
            this.head = newHead;
        }
        ++this.size;
    }

    at(index) {
        if (this.size === 0) {
            throw Error("LinkedList is empty");
        } else if (index < 0 || index >= this.size) {
            throw Error("Out of bounds");
        }
        let currNode = this.head;
        while (index !== 0) {
            currNode = currNode.next;
            --index;
        }
        return currNode;
    }

    pop() {
        if (this.size === 0) {
            throw Error("LinkedList is empty");
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let beforeTail = this.head;
            while (beforeTail.next.next !== null) {
                beforeTail = beforeTail.next;
            }
            beforeTail.next = null;
        }
        --this.size;
    }

    find(val) {
        if (this.size === 0) {
            throw Error("LinkedList is empty");
        } else {
            let currNode = this.head;
            while (currNode !== null) {
                if (currNode.value === val) {
                    return currNode;
                }
                currNode = currNode.next;
            }
        }
        return null;
    }

    contains(val) {
        return this.find(val) !== null;
    }

    insertAt(value, index) {
        if (index > this.size || index < 0) {
            throw Error("Out of bounds");
        } else if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            let prev = null;
            let currNode = this.head;
            let currInd = 0;
            while (currInd != index) {
                prev = currNode;
                currNode = currNode.next;
                ++currInd;
            }
            let newNode = new Node(value, currNode);
            prev.next = newNode;
            ++this.size;
        }
    }

    removeAt(index) {
        if (this.size === 0) {
            throw Error("LinkedList is empty");
        } else if (index >= this.size || index < 0) {
            throw Error("Out of bounds");
        } else if (this.size === 1 || index === this.size) {
            this.pop();
        } else {
            let prev = null;
            let currNode = this.head;
            let currInd = 0;
            while (currInd != index) {
                prev = currNode;
                currNode = currNode.next;
                ++currInd;
            }
            prev.next = currNode.next;
            --this.size;
        }
    }

    toString() {
        let res = "";
        let currNode = this.head;
        while (currNode !== null) {
            res += "( " + currNode.value + " )";
            res += " -> ";
            currNode = currNode.next;
        }
        res += "null";
        return res;
    }

    get size() {
        return this._size;
    }

    set size(newSize) {
        this._size = newSize;
    }
}
