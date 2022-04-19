# 104. 二叉树的最大深度

- 深度优先搜索

```js
var maxDepth = function(root) {
    function getNext(root,num){
        if(!root)return num
        ++num
        let num1 = getNext(root.left,num);
        let num2 = getNext(root.right,num)
        return Math.max(num1,num2)
    }
    return getNext(root,0);
};
```

# 实现Immer的produce()

- compose() 递归判断，把newState的值赋给state

```js
function produce(base, recipe) {
  let newState = JSON.parse(JSON.stringify(base));
  recipe(newState);
  if(compose(base,newState)) return base
  return newState
}
function compose(base,state){
  if(typeof base !== typeof state){
    return false
  }
  if(typeof base != "object"){
    return base === state
  }
  let isEqural = true
  for(let i in base){
    if(compose(base[i],state[i])){
      state[i]=base[i]
    }else{
      isEqural=false;
    }
  }
  return Object.keys(base).length === Object.keys(state).length && isEqural
}
```