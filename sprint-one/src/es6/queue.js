class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // Create storage method
    this.storage = {};

  }

  // Create enqueue method
  enqueue (value) {
    // Set storage at key equal to value, where key is equal to the length of storage's values
    this.storage[this.lengthKeys()] = value;
  }

  // Crete dequeue method
  dequeue () {
    // If there are keys in storage
    if (this.lengthKeys()) {
      // Set removedString variable equal to the first value of storage
      var removedString = this.storage[0];
      // Loop over length of storage's keys array
      for (var i = 0; i < this.lengthKeys(); i++) {
        // Set storage at current key equal to value at storage of next key
        this.storage[i] = this.storage[i + 1];
      }
      // delete the first property of storage
      delete this.storage[0];
      // return removedString
      return removedString;
    }
  }
  // Create size method
  size () {
    // Return the invocation of lengthKeys
    return this.lengthKeys();
  }
  // Create lengthKeys method
  lengthKeys () {
    // Return the length of storage's keys array
    return Object.keys(this.storage).length;
  }

}
