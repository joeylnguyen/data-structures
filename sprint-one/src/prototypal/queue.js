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

  },
  // Add dequeue method to Queue prototype
  dequeue: function () {

  },
  // Add size method to Queue prototype
  size: function () {

  }
};


