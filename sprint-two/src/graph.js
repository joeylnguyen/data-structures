// Instantiate a new graph
var Graph = function() {
  // Create connections object to store nodes
  this.connections = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // If current node exists in graph connections
  if(this.connections[node] === undefined) {
    // Add node to connections object with node as the key and an empty array as a value
    this.connections[node] = [];
  }

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

};
// If this.connections[node] exists
// Then return true
// Otherwise return false

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};
// Use delete to remove this.connections[node];

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};
// Check if either exist > if (this.connections[fromNode] && this.connections[toNode])
// Since undirected graph, relationship is symmetrical. Only need to check one node
// If the index of toNode in fromNode's array is greater than 0
// return true
// Otherwise, return  false
// Return false if first condition isn't satisfied

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};
// Add toNode to fromNode's array
// Add fromNode to toNode's array

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};
// Use splice to remove each node from eachother's array, leveraging indexOf for index lookup .splice(this.connections[fromNode].indexOf(toNode), 1)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};
// Use _.each on this.connections

/*
 * Complexity: What is the time complexity of the above functions?
 */


