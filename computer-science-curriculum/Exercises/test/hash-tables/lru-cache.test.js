const expect = require('chai').expect;
const LRUCache = require('../../src/hash-tables/lru-cache')

describe("cache", () => {

  it("can put and get items", () => {
    const cache = new LRUCache(1);
    cache.put("a", "hello");
    expect(cache.get("a")).to.equal("hello");
  })

  it("expires items older than the max", () => {
    const cache = new LRUCache(1);
    cache.put("a", "hello");
    cache.put("b", "still here");
    expect(cache.get("a")).to.be.undefined;
    expect(cache.get("b")).to.equal("still here");
  })

  it("expires the least recently used items", () => {
    const cache = new LRUCache(2);
    cache.put("a", "hello");
    cache.put("b", "still here");
    expect(cache.get("a")).to.equal("hello");
    cache.put("c", "killer c");
    expect(cache.get("c")).to.equal("killer c");
    expect(cache.get("a")).to.equal("hello");
    expect(cache.get("b")).to.be.undefined;
  })

  it("works with a more complex example", () => {
    const cache = new LRUCache(5);
    cache.put("a", "all");
    cache.put("b", "bees");
    cache.put("c", "can");
    cache.put("d", "dance");
    cache.put("e", "everywhere");
    cache.put("f", "fast");
    expect(cache.get("a")).to.be.undefined;
    expect(cache.get("b")).to.equal("bees");
    expect(cache.get("c")).to.equal("can");
    expect(cache.get("d")).to.equal("dance");
    expect(cache.get("e")).to.equal("everywhere");
    expect(cache.get("f")).to.equal("fast");

    cache.put("g", "gladly");
    expect(cache.get("b")).to.be.undefined;
    expect(cache.get("c")).to.equal("can");

    cache.put("h", "humbly");
    expect(cache.get("d")).to.be.undefined;
    expect(cache.get("c")).to.equal("can");
  })

})
