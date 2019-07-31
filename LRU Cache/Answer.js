/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // this.cache looks like - first Map { 1 => 1, 2 => 2 }
    if (this.cache.has(key)) {
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        console.log(this.cache)
        return val;
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
    if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
    } else {
        if (this.cache.size < this.capacity) {
            this.cache.set(key, value);
        } else {
                 // Iterate throught the Map Object by calling keys()
                 // kind of like a linked list keys? - [Map Iterator] { 1 }
                 const lru_key = this.cache.keys().next().value;
                 this.cache.delete(lru_key);
                 this.cache.set(key, value);
               }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// WITHOUT MAP OBJECT

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = capacity;
  this.obj = {};
  this.track = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.obj[key]) {
    for (let i = 0; i < this.track.length; i++) {
      if (this.track[i] === key) {
        let renew = this.track.splice(i, 1)[0];
        this.track.push(renew);
      }
    }
    return this.obj[key];
    console.log(this.track);
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
  if (this.obj[key]) {
    for (let i = 0; i < this.track.length; i++) {
      if (this.track[i] === key) {
        let renew = this.track.splice(i, 1)[0];
        this.track.push(renew);
        this.obj[key] = value;
      }
    }
    return;
  }

  if (Object.keys(this.obj).length === this.size && !this.obj[key]) {
    //         Find Least recently used.
    let gone = this.track.shift();
    delete this.obj[gone];
  }
  this.obj[key] = value;
  this.track.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
