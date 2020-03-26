var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create storage method which will be unique to each instance
  this.storage = {};
};

// Add enqueue method to Queue's prototype
Queue.prototype.enqueue = function (value) {
  // Set key at storage equal to the value, where key is equal to the length of storage's keys array
  this.storage[this.lengthKeys()] = value;
};

// Add dequeue method to Queue's prototype
Queue.prototype.dequeue = function () {
  // If there are keys in storage
  if (this.lengthKeys()) {
    // Set a removedString variable equal to the first value of storage
    var removedString = this.storage[0];
    // Loop over the length of storage's keys array
    for (var i = 0; i < this.lengthKeys(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    // Delete the last value in storage
    delete this.storage[this.lengthKeys() - 1];

    return removedString;
  }
};

// Add size method to Queue's prototpye
Queue.prototype.size = function () {
  // Return lengthKeys
  return this.lengthKeys();
};

// Add lengthKeys method to Queue's prototype
Queue.prototype.lengthKeys = function () {
  // Return the length of storage's keys array
  return Object.keys(this.storage).length;
};
