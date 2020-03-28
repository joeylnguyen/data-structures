// Constructor
// Each instance will have 3 properties: value, left, and right
// left will be another binary search tree where all values are lower than current value
// right will be another binary search tree where all values greater than current value

var BinarySearchTree = function(value) {
  // Value
  this.value = value;
  // Left
  this.left = null;
  // Right
  this.right = null;
};

// Takes a value, creates a node, and places it in the tree in the correct position
// Input is a value
// Output doesn't return anything, but sets a node left or right depending on value
// Starts from root, compares insert value to root value, inserts left or right. When we get another value, start from root again and repeat the same process on every child node
// Constraints: O(log (n))
// Edgecase: Can tree instance be empty? Input value is equal to any current nodes?
// Find the leaf we need append new node to
// Recursively traverse tree.
//{value: 10, left: {value: 6 ,right: null, left:null}, right: {value: 11, left: null right: {value: 12, left: null, right: null}}}
BinarySearchTree.prototype.insert = function (value) {
  // Create new tree instance using input value
  var newTree = new BinarySearchTree(value);

  var searchNodes = function(currentNode) {
    // Base case

    // If input value is greater than current node's value
    if (value > currentNode.value) {
      // Check right for null
      // If not null, search through the current node's right
      if (currentNode.right) {
        searchNodes(currentNode.right);
      } else {
        currentNode.right = newTree;
      }
    // If input value is smaller than current node's value
    } else if (value < currentNode.value) {
      // Check left for null
      // If not null, search through the current node's left
      if (currentNode.left) {
        searchNodes(currentNode.left);
      } else {
        //if null, insert input value left
        currentNode.left = newTree;
      }
    }
  };
  // Call recursive function
  searchNodes(this);
};
//binarySearchTree.insert
// Searches in tree for target value
// Input: targetValue
// Output: Returns a boolean
// Edgecases:
BinarySearchTree.prototype.contains = function (value) {
// Compare value to currentNode's value

  var searchForValue = function(currentNode) {
    // If input value is equal to currentNode's value
    if (value === currentNode.value) {
      // Return true
      return true;
    // If input value is greater than currentNode's value
    } else if (value > currentNode.value) {
      // If currentValue's right node is not null
      if (currentNode.right) {
        // Search through right node
        return searchForValue(currentNode.right);
      // Otherwise, if it is null
      } else {
        // Return false
        return false;
      }
    // If input value is smaller than currentNode's value
    } else if ( value < currentNode.value) {
      // If currentValue's left node is not null
      if (value < currentNode.value) {
        // Search through left node
        if (currentNode.left) {
          return searchForValue(currentNode.left);
        // Otherwise, if it is null
        } else {
          // Return false
          return false;
        }
      }
    }
  };

  return searchForValue(this);
};

// Inputs: Callback
// Output: Performs callback on every node, doesn't return value
// Search nodes for null
BinarySearchTree.prototype.depthFirstLog = function (cb) {

  // Create helper function to traverse tree
  var traverseNodes = function(currentNode) {
    // Invoke callback on currentNode cb(currentNode)
    cb(currentNode.value);
    // If currentNode's left isn't null
    if (currentNode.left) {
      // Search through currentNode's left
      traverseNodes(currentNode.left);
    }
    // If currentNode's right isn't null
    if (currentNode.right) {
      // Search through currentNode's right
      traverseNodes(currentNode.right);
    }
  };
  traverseNodes(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
All functions have O(log(n)) time complexity because it removes possible operations by checking if an input is greater than or equal the currentNode's value. For example, if the input value is greater than currentNode's value it eliminates all the values to the left of currentNode

 - .insert has O(log(n))
 - .contains has O(log(n))
 - .depthFirstLog has O(log(n))
 */
