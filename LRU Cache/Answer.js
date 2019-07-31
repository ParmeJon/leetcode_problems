/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = capacity;
  this.obj = {};
  this.stack = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.obj[key] !== undefined) {
    if (this.track[key] !== undefined) {
      this.track[key] += 1;
    } else {
      this.track[key] = 1;
    }

    return this.obj[key];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (Object.keys(this.obj).length === this.size) {
    //         Find Least recently used.
    let lowest = Number.MAX_VALUE;
    for (let key in this.track) {
      if (this.track[key] <= lowest) {
        lowest = key;
      }
    }
    delete this.track[lowest];
    delete this.obj[lowest];
  }
  this.obj[key] = value;
  this.track[key] = 1;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
