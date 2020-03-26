var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add the passed value to the storage object with key being the current number of keys + 1
    storage[Object.keys(storage).length + 1] = value;
    console.log(storage);
    // joey.enqueue('a') >> {0+1 : 'a' } >> {1: 'a'}
    // joey.enqueue('b') >> {1 +1 : 'b' } >> {1: 'a', 2: 'b'}
  };

  someInstance.dequeue = function() {
    // If the storage object has more than 0 keys
    // Access the values array of storage at index 0 and assign it to a variable
    // Delete the first key from the storage object

    // {1: 'a', 2: 'b'} >> 2 keys >> Object.values ['a', 'b']
    // joey.dequeue()
    // >> var returnString = Object.values(storage)[0]; >> var returnString = 'a'
    // >> delete storage[Object.keys(storage)[0]];

    // Return the string removed

  };

  someInstance.size = function() {
    // Return the length of the keys array of storage
  };

  return someInstance;
};
