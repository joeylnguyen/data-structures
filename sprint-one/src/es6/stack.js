class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // Create storage method
    this.storage = {};
  }

  // Create push method
  push (value) {
    // Set storage at key equal to value, where key is equal to length of storage's keys array
    this.storage[this.lengthKeys()] = value;
  }
  // Create pop method
  pop () {
    // If storage has keys
    if (this.lengthKeys()) {
      // Set removedString variable equal to the last value in storage
      var removedString = this.storage[this.lengthKeys() - 1];
      // Delete the last value in storage
      delete this.storage[this.lengthKeys() - 1];
      // Return removedString
      return removedString;
    }
  }
  // Create size method
  size () {
    // Return invocation of lengthKeys
    return this.lengthKeys();
  }
  // Create lengthKeys method
  lengthKeys () {
    // Return the length of storage's keys array
    return Object.keys(this.storage).length;
  }
}