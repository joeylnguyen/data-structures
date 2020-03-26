var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create instance object using queueMethods as prototype
  var someInstance = Object.create(queueMethods);

  // Create storage property in someInstance
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  // Add enqueue method to Queue prototype
  enqueue: function (value) {
    // Set storage at key equal to number of keys in storage equal to value
    this.storage[this.lengthKeys()] = value;
  },
  // Add dequeue method to Queue prototype
  dequeue: function () {
    // If number of keys is greater than 0
    if (this.lengthKeys() > 0) {
      // Set a removedString variable equal to the first value in storage
      var removedString = this.storage[0];
      // Run a for loop on the keys array of storage
      for (var i = 0; i < this.lengthKeys(); i++) {
        // Set storage at current key equal to the value of storage at the next key
        this.storage[i] = this.storage[i + 1];
      }
      // Delete the last property in storage
      delete this.storage[this.lengthKeys() - 1];
      // Return the removedString variable
      return removedString;
    }
  },
  // Add size method to Queue prototype
  size: function () {
    // Return the length of storage's keys array
    return this.lengthKeys();
  },
  // Add lengthKeys property on prototype
  lengthKeys: function () {
    return Object.keys(this.storage).length;
  },
  // Add lengthValues property on protoype
  lengthValues: function () {
    return Object.values(this.storage).length;
  }
};


