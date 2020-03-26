var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create storage method which will be unique to each instance
  this.storage = {};
};

// Add enqueue method to Queue's prototype
Queue.prototype.enqueue = function (value) {
  // Set key at storage equal to the value, where key is equal to the length of storage's keys array
};

// Add dequeue method to Queue's prototype
Queue.protoype.dequeue = function () {
  // If there are keys in storage
  // Set a removedString variable equal to the first value of storage
  // Loop over the length of storage's keys array
  // Set storage at current key equal to the value of storage at the next key
  // Delete the last value in storage
};

// Add size method to Queue's prototpye
Queue.prototype.size = function () {
  // Return lengthKeys
};

// Add lengthKeys method to Queue's prototype
Queue.prototype.lengthKeys = function () {
  // Return the length of storage's keys array
};
