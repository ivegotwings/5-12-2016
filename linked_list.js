'use strict';

/**
Doubly-Linked List
*/
function LinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    Object.defineProperty(this, 'length', {
        get: function() {
            return this._length;
        }.bind(this)
    });
}

/**
 * @param {any}
 */
function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * Checks if the linkedlist is empty
 *  @return Boolean
 */
LinkedList.prototype.IsEmpty = function() {
    return this.length === 0;
};

/**
 * 
 */
LinkedList.prototype.Insert = function(val) {
    var node = new Node(val);
    if (!this.head) this.head = node;
    if (!this.tail) this.tail = node;
    else {
        var prevNode = this.tail;
        this.tail = node;
        node.prev = prevNode;
        prevNode.next = node;
    }
    this._length++;
};

/**
 * @param {Object} n
 * @param {int} [index] [position of the object in the linked list]
 */
LinkedList.prototype.add = function(n, index) {
    if (index < 0 || index > this.length) {
        throw new Error('Index Out Of Bounds');
    }
    if (index === undefined || index === null || isNaN(index)) {
        throw new Error('Invalid Index');
    }
    var node = new Node(n);
    var nodeAtIndex;
    if (index < this.length) {
        if (index === 0) {
            nodeAtIndex = this.head;
            this.head = node;
        } else {
            nodeAtIndex = this.getNode(index);
            node.prev = nodeAtIndex.prev;
        }
        node.next = nodeAtIndex;
        nodeAtIndex.prev = node;
    } else {
        /**
         * index is greater than length
         * two possible scenarios
         */
        //we do not have a head yet=> length = 0(no head or tail) index = 1
        if (!this.head) this.head = node;
        //we have a head 
        if (!this.tail) {
            this.tail = node;
            node.prev = this.head;
        }
    }

    this._length++;
};

/**
 * @param {Number} [index] [get value at a particular node]
 *
 */
LinkedList.prototype.getValue = function(index) {
    return this.getNode(index).value;
};

/**
 * @param {Number} [index] [Return Node At Index]
 */
LinkedList.prototype.getNode = function(index) {
    if (index < 0 || index > this.length) {
        throw new Error('Index Out Of Bounds');
    }
    if (index === undefined || index === null || isNaN(index)) {
        throw new Error('Invalid Index');
    }
    var node = this.head;
    for (var i = 1; i <= index; i++) {
        node = node.next;
    }
    return node;
};

/**
 * @param {function} [fn] [for each node execute a function passed as a parameter]
 */

LinkedList.prototype.forEach = function(fn) {
    var node = this.head;
    while (node) {
        fn(node.value);
        node = node.next;
    }
};

LinkedList.prototype.delNodeAtIndex = function(index) {
    this.delNode(this.getNode(index));
};

/**
 * @param {Node} [node] [Delete a Given Node]
 */

LinkedList.prototype.delNode = function(node) {
    if (this.head == node) this.head = node.next;
    if (this.tail == node) this.tail = node.prev;
    else {
        var prevNode = node.prev;
        var nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    this.length--;
};

//============================================Replace Code Before This==================

/**
 * @param {value} [x] [the data value for the first node]
 * @param {value} [y] [the data value for the second node]
 */

LinkedList.prototype.swapNode = function(x, y) {
    if (x === y) return;
    //search X node
    var curNodeX = this.head;
    while (curNodeX) {
        if (curNodeX.value == x) break;
        else curNodeX = curNodeX.next;
    }

    //search Y node
    var curNodeY = this.head;
    while (curNodeY) {
        if (curNodeY.value == y) break;
        else curNodeY = curNodeY.next;
    }

    //we did not find the node
    if (!curNodeX || !curNodeY) {
        return;
    }

    //swap nodes
    var prevX = curNodeX.prev;
    var nextX = curNodeX.next;
    var prevY = curNodeY.prev;
    var nextY = curNodeY.next;

    curNodeX.prev = prevY;
    prevY.next = curNodeX;
    curNodeX.next = nextY;
    nextY.prev = curNodeX;

    curNodeY.prev = prevX;
    prevX.next = curNodeY;
    curNodeY.next = nextX;
    nextX.prev = curNodeY;
};

LinkedList.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    var curNode = head;
    while (curNode) {
        var prev = curNode.prev;
        var next = curNode.next;
        curNode.next = prev;
        curNode.prev = next;
        curNode = next;
    }
    this.tail = head;
    this.head = tail;
};

LinkedList.prototype.swapData = function(x, y) {
    if (x === y) return;
    //search X node
    var curNodeX = this.head;
    while (curNodeX) {
        if (curNodeX.value == x) break;
        else curNodeX = curNodeX.next;
    }

    //search Y node
    var curNodeY = this.head;
    while (curNodeY) {
        if (curNodeY.value == y) break;
        else curNodeY = curNodeY.next;
    }

    //we did not find the node
    if (!curNodeX || !curNodeY) {
        return;
    }

    curNodeX.value = y;
    curNodeY.value = x;
};

(function() {
    var LList = new LinkedList();
    LList.Insert(1);
    LList.Insert(2);
    LList.Insert(4);
    LList.Insert(5);
    LList.swapData(2, 4);
    console.log(LList);
})();