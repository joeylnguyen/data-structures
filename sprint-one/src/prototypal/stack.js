var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create instance object setting stackMethods as the prototype
  var someInstance = Object.create(stackMethods);

  // Create storage property on someInstance
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  // Create push method
  push: function (value) {
    // Set storage of someInstance at the length of storage's keys array equal to the value
    this.storage[this.lengthKeys()] = value;
  },
  // Create pop method
  pop: function () {
    // If there are keys in storage's keys array
    // Set a removedString variable equal to the last value in storage
    // Delete the last value in storage

    // Return removedString variable
  },
  // Create size method
  size: function () {
    // Return the invocation of lengthKeys
    return this.lengthKeys();
  },
  // Create lengthKeys method
  lengthKeys: function () {
    // return the length of storage's keys array
    return Object.keys(this.storage).length;
  }
};


