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
  enqueue: function (value) {
    console.log('hi');
  },
  // Create property for dequeue
  dequeue: function () {
    console.log('bye');
  },
  // Create property for size
  size: function () {
    console.log('why');
  }
};


