// Instantiate a new graph
var Graph = function() {
  // Create connections object to store nodes
  this.connections = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // If current node exists in graph connections
  if (this.connections[node] === undefined) {
    // Add node to connections object with node as the key and an empty array as a value
    this.connections[node] = [];
  }

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // If this.connections[node] exists
  if (this.connections[node]) {
    // Then return true
    return true;
  } else {
    // Otherwise return false
    return false;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {

    // { 4:[], 5: []}
  }
};
// Check if the node we want to remove has edges
// Iterate over its edges array
// Use the value at current i to lookup the node in the graph
//

// Use delete to remove this.connections[node];

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Check if both exist > if (this.connections[fromNode] && this.connections[toNode])
  if (this.contains(fromNode) && this.contains(toNode)) {
    // Since undirected graph, relationship is symmetrical. Only need to check one node
    // If the index of toNode in fromNode's array is greater than 0
    if (this.connections[fromNode].indexOf(toNode) >= 0) {
      return true;
    } else {
      return false;
    }
  }
  // Return false if first condition isn't satisfied
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Check if both exist
  if (this.contains(fromNode) && this.contains(toNode)) {
    // Add toNode to fromNode's array
    this.connections[fromNode].push(toNode);
    // Add fromNode to toNode's array
    this.connections[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    // Use splice to remove each node from eachother's array, leveraging indexOf for index lookup
    this.connections[fromNode].splice(this.connections[fromNode].indexOf(toNode), 1);
    this.connections[toNode].splice(this.connections[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Loop through connections
  for (let node in this.connections) {
    // Invoke callback on each node
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


