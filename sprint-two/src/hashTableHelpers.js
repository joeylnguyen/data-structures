/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    // Make storage hold arrays at each index
    // check if storage[index] is not undefined, if it is, we set the storage[index] to an array with the input value stored in it
    if (!storage[index]) {
      storage[index] = [value];
      // If, storage has more than 0
    } else if (storage[index].length > 0) {
      for (let i = 0; i < storage[index].length; i++) {
        // If the key of the tuple in storage at index is equal to the first value at index 0 of the input array
        if (storage[index][i][0] === value[0]) {
          // Set the value of the current tuple to the value of the input tuple
          storage[index][i][1] = value[1];
          return;
        }
      }
      // Otherwise, push input value to the array at index
      storage[index].push(value);
    }
  };

  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 - .get has time complexity of O(1) because it uses a index lookup
 - .set has time complexity of O(1) given ideal circumstances. At worst, it becomes O(n) due to collisions
 - .each has time complexity of O(n) because it loops through storage
 - checkLimit has time complexity of O(1) because it's comparing two values
 - getIndexBelowMaxForKey is O(n) because it's looping through the input string/key
 */
