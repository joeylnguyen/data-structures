var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Create an object that will be instantiated
  var someInstance = {};

  // Extend the methods properties of queueMethods onto someInstance
  _.extend(someInstance, queueMethods);

  var storage = {};

  return someInstance;
};

var queueMethods = {
  // Create property for enqueue

  // Create property for dequeue

  // Create property for size
};


