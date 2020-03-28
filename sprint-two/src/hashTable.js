

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Adds key value pair into storage
HashTable.prototype.insert = function(k, v) {
  // Get the hashed index from the hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use index, call .set to put the key and value in storage

  this._storage.set(index, [k, v]);

};

// Retrieves value given a key
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  //if the bucket length is 1, return item[1]
  if (bucket.length === 1) {
    return bucket[0][1];
    //check the length bucket, if it's greater than 1
  } else if (bucket.length > 1) {
    for (var i = 0; i < bucket.length; i++) {
      //iterate the bucket and compare item[0] to the input key to find the correct pair
      if (bucket[i][0] === k) {
        //return item[1]
        return bucket[i][1];
      }
    }
  }
};

// Removes value given a key
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Set a variable equal to the bucket at index
  var bucket = this._storage.get(index);
  // Loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // If key at the current tuple is equal to the input k
    if (bucket[i][0] === k) {
      // Remove the tuple from the array using spllice
      bucket.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 All of the functions are constant under ideal circumstances. At worst, collisions will cause time complexity to be O(n)
 */


