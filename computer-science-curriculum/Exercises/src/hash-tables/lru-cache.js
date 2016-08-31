/*
  A least recently used cache. Given a max-size, we create space for
  maxSize items. Each new "put" adds something to the cache. If the
  request to put something puts the cache over max size, then the least
  recently accessed element is evicted from the cache.

  @constructor
  @param {number} maxSize - an integer that determines the size of the cache
*/
function LRUCache(maxSize) {

}

/*
  Add an item to the cache. If adding this item puts the cache over maxSize then
  the least recently used item must be evicted. If this key collides with another key
  then the new value should replace the old value (meaning eviction would never occur
  in this case).

  @param key - a key to be used for the cache
  @param value - the value to be associated with the provided key

  @returns undefined
*/
LRUCache.prototype.put = function(key, value) {

}

/*
  Check for and return the value associated with the provided key if it exists,
  return undefined if there is no value associated with the provided key.

  @param key - a key for our LRUCache

  @returns the value associated with the provided key, or undefined
*/
LRUCache.prototype.get = function(key) {

}

module.exports = LRUCache;
