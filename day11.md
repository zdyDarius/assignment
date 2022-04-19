# 146. LRU 缓存

- https://leetcode-cn.com/problems/lru-cache/

```js
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.KeyValue = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if(!this.KeyValue.has(key)) return -1
    let value = this.KeyValue.get(key)
    this.KeyValue.delete(key);
    this.KeyValue.set(key,value);
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.KeyValue.delete(key);
    this.KeyValue.set(key,value);
    if(this.KeyValue.size>this.capacity){
        let text = this.KeyValue.keys().next().value;
        this.KeyValue.delete(text)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

# 35. implement `Promise.race()`

- https://bigfrontend.dev/problem/implement-Promise-race

```js
function race(promises) {
  // your code here
  return new Promise((resolve,reject)=>{
    promises.forEach(item=>{
      item.then(res=>{
        resolve(res)
      }).catch(res=>{
        reject(res)
      })
    })
  })
}
```