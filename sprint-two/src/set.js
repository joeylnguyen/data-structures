var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me // Make an array
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    // Push item to storage
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
// Use indexOf to check if item is in array
  if (this._storage.indexOf(item) >= 0) {
    return true;
  } else {
    return false;
  }

};

setPrototype.remove = function(item) {
  // Use .contains to check if item is in array
  if (this.contains(item)) {
    // Get index
    let index = this._storage.indexOf(item);
    // Splice to remove item from array
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 - .add has O(n) because it needs to check if value is in storage first to add it
 - .contains has O(n) because it needs to go through the array to find the index
 - .remove has O(n) because it needs to check if the item is in the array which O(n, and then remove from the array using index lookup is also O(n)
 */
