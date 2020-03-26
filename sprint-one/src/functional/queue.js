var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add the passed value to the storage object with key being the current number of keys + 1

    storage[Object.keys(storage).length] = value;
    console.log(storage);
    // joey.enqueue('a') >> {0+1 : 'a' } >> {1: 'a'}
    // joey.enqueue('b') >> {1 +1 : 'b' } >> {1: 'a', 2: 'b'}
  };

  someInstance.dequeue = function() {
    // If the storage object has more than 0 keys
    if (Object.keys(storage).length > 0) {
      // Access the values array of storage at index 0 and assign it to a variable
      var removedString = Object.values(storage)[0];

      // Loop through the keys array
      for (var i = 0; i < Object.keys(storage).length; i++) {
        // The current key is equal to the value in storage at the next key
        storage[i] = storage[i + 1];
      }
      // Delete the last key from the storage object
      delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];

    }

    // Return the string removed
    return removedString;
  };

  someInstance.size = function() {
    // Return the length of the keys array of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
