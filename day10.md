#  环形链表 II

- 双指针法
- 慢指针每次一步，快指针每次两步，
- 相遇的时候，假设开始的位置到环的位置是x步，环到相遇的位置是y步
- 快指针则是x+y+n圈===2(x+y)。

- 哈希表
  
```js
var detectCycle = function (head) {
    if(!head) return null
    let low = head;
    let fast = head;
    let flag = true;
    while (flag) {
        fast = fast.next;
        if (!fast||!fast.next) return null
        fast = fast.next
        low = low.next
        if(low == fast){
            flag = false
        }
    }
    while(low!=head){
        head = head.next;
        low = low.next;
    }
    return low
};
```

# Promise.any

```js
function any(promises) {
  // your code here
  if (!promises.length) {
    throw '报错'
  }
  return new Promise((resolve, reject) => {
    let list = []
    promises.forEach((item, index) => {
      item.then(res => {
        resolve(res)
      }).catch(res => {
        list[index] = res;
        if (list.length === promises.length) {
          reject(new AggregateError(
            'No Promise in Promise.any was resolved',
            list
          ))
        }
      })
    })
  })
}
```