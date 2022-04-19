# 100. 相同的树
- 便利一次转字符串比较
```js
var isSameTree = function(p, q) {
    function getAll(head,arr){
        arr.push(head?.val);
        if(!head)return arr
        getAll(head.left,arr);
        getAll(head.right,arr);
        return arr
    }
    let pStr = getAll(p,[]).toString();
    let qStr = getAll(q,[]).toString();
    return pStr === qStr
};
```
- 深度优先遍历
```js
var isSameTree = function (p, q) {
    if (p == null && q == null) return true
    if (p == null || q == null) return false
    if (p.val != q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```