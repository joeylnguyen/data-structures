var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create someInstance object
  var someInstance = {
    // Create property storage
    storage: {}
  };

  //  Extend stackMethods properties onto someInstance
  _.each(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  // Create push method
  push: function (value) {
    // Assign storage at key equal to the length of storage's keys array to the value
  },
  // Create pop method
  pop: function () {
    // If there are keys in storage's keys array
    // Assign a variable removedString equal to the first value in storage's values array
    // Delete the first value in storage using the first value in storage's keys array as a key

    // Return the removedString variable
  },
  //Create size method
  size: function () {
    // Return the length of storage's keys array
  },

};


