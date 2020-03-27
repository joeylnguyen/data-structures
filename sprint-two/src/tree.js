var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  //children property is an array containing all the children of the nodes
  newTree.children = [];

  //extend newTree with all the methods treeMethods have
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Creation of a child what's value of this child?
  var node = Tree(value);
  // How we would want to designate the child
  this.children.push(node);
};

treeMethods.contains = function(target) {
  // Create an empty array to store values
  var values = [];
  // Declare a function that accepts a node parameter
  var searchValues = function (node) {
    // If there is a truthy value
    if (node.value) {
      // Push the value to the values array
      values.push(node.value);
    }
    // Check if the node has children
    if (node.children.length > 0) {
      // Loop through the children
      for (let i = 0; i < node.children.length; i++) {
        // Invoke searchValues on each child node
        searchValues(node.children[i]);
      }
    }
  };
  // Invoke searchValues on this, this being whatever object is invoking the addChildren method
  searchValues(this);

  // Check if the value is in the values array
  if (values.indexOf(target) >= 0) {
    return true;
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 - .addChild has time complexity of O(1) because it's simply pushing values to an array
 -.contains has time compleixity of O(n) because we're doing a loop in searchValues which is O(n), a push to an array which is O(1), and another loop due to indexOf which is O(n). Therefore, time complexity is O(n)

 */


