var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Store the given value in storage with the one plus the length of the keys array as its key
    storage[Object.keys(storage).length + 1] = value;

  };

  someInstance.pop = function() {
    // If the length of the keys array is greater than 0
    if (Object.keys(storage).length > 0) {
      // Assign a variable to the value being removed
      var valueRemoved = Object.values(storage)[Object.values(storage).length - 1];
      // Remove the value in storage at key equal to the length of the keys array
      delete storage[Object.keys(storage).length];
    }
    // Return the value removed
    return valueRemoved;
  };

  someInstance.size = function() {
    // Get an array of the keys and return the length of that array
    return Object.keys(storage).length;
  };

  return someInstance;
};
