var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create storage property
  this.storage = {};
};

// Add push method to Stack prototype
Stack.prototype.push = function (value) {
  // Set storage at key equal to value, where key is equal to the length of storage's keys array
  this.storage[this.lengthKeys()] = value;
};
// Add pop method to Stack prototype
Stack.prototype.pop = function () {
  // If there are keys in storage
  if (this.lengthKeys()) {
    // Set removedString variable equal to the last value in storage
    var removedString = this.storage[this.lengthKeys() - 1];
    // Delete the last value in storage
    delete this.storage[this.lengthKeys() - 1];
    // Return removedString
    return removedString;
  }
};
// Add size method to Stack prototype
Stack.prototype.size = function () {
  // Return invocation of lengthKeys
  return this.lengthKeys();
};
// Add lengthKeys method to Stack prototype
Stack.prototype.lengthKeys = function () {
  // Return the length of storage's keys array
  return Object.keys(this.storage).length;
};
