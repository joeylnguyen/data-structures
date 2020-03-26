var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create someInstance object
  var someInstance = {
    // Create property storage
    storage: {}
  };
  //  Extend stackMethods properties onto someInstance
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  // Create push method
  push: function (value) {
    // Assign storage at key equal to the length of storage's keys array to the value
    this.storage[Object.keys(this.storage).length] = value;
  },
  // Create pop method
  pop: function () {
    // If there are keys in storage's keys array
    if (Object.keys(this.storage).length > 0) {
      // Assign a variable removedString equal to the first value in storage's values array
      var removedString = Object.values(this.storage)[0];
      // Delete the first value in storage using the first value in storage's keys array as a key
      delete this.storage[Object.keys(this.storage)[0]];
      // Return the removedString variable
      return removedString;
    }

  },
  //Create size method
  size: function () {
    // Return the length of storage's keys array
    return Object.keys(this.storage).length;
  },

};


