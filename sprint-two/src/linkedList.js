var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // If there's nothing in head and tail, the list is empty.
    if (!list.head && !list.tail) {
      //list.head and list.tail should be the new nodes
      list.tail = Node(value);
      list.head = this.tail;
    } else {
      //save the old tail
      let prevTail = list.tail;
      // Otherwise, if there's already tail, overwrite list.tail to new node with value
      list.tail = Node(value);
      //the next tail's next value is going to be the new node/list.tail.
      prevTail.next = list.tail;
    }
  };

  list.removeHead = function() {
    //let the removed head equals this.head
    let remHead = this.head;

    //reasign this.head.next to this.head
    this.head = remHead.next;

    //return removed
    return remHead.value;
  };

  list.contains = function(target) {
    // create a variable finder give an initial value of this.head
    let currentNode = this.head;
    // If curretNode's value is equal to the target
    if (currentNode.value === target) {
      // return true
      return true;
    }
    // while(variable.next !=== null)
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      //comapre variable.value and target.
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
- addToTail is O(1) because you only need to change the tail pointer to the new node and the head pointer to the preceding node.
- removeHead is also O(1) because you just need to remove the node that the head is pointing to and reassign to the next node.
- contains is O(n) because you have to search through the entire list
 */
