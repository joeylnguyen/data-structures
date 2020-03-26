var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Create an object that will be instantiated
  var someInstance = {
    // Make storage a property of someInstance
    storage: {},
  };

  // Extend the methods properties of queueMethods onto someInstance
  _.extend(someInstance, queueMethods);



  return someInstance;
};

var queueMethods = {
  // Create property for enqueue
  enqueue: function (value) {
    // Add the value to storage with key equal to the length of storage's keys array
    this.storage[Object.keys(this.storage).length] = value;
  },
  // Create property for dequeue
  dequeue: function () {
    // If there are keys in storage's keys array
    // Create a removedString variable that will be assigned to the first value in storage

    // Loop through the storage object
    // Set the storage object at the current key equal to the value of the storage object at the next key

    // Delete the last value in the storage object

    // Return the removedString variable
  },
  // Create property for size
  size: function () {
    // Return the length of storage's keys array

  }
};


