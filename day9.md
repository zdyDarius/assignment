# 160. 相交链表

- 双指针，分别从两条链表开始进行，执行到尾部，更换链表继续执行
- 1.没有相交，执行m+n次后，同时为null结束循环
- 2.有相交，执行(m+n-c)次后到达相交的节点，c指的是相交节点到null的次数

```js
var getIntersectionNode = function(headA, headB) {
   let A = headA;
   let a = true
   let B = headB;
   let b = true
   while(A != B & (A !== null || B !==null)){
       if(A){
           A = A.next
       }else{
           A = a ? headB : headA;
           a = !a;
       }
       if(B){
           B = B.next;
       }else{
           B = b ? headA : headB;
           b = !b;
       }
   }
   return A
};
```

# 拖拽
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            position: absolute;
            left: 100px;
            top: 150px;
            width: 100px;
            height: 100px;
            background-color: #fcb;
            cursor: pointer;
        }
    </style>
</head>

<body style="position:relative">
    <div id="box"></div>
</body>
<script>

    let x1 = 0;
    let y2 = 0
    const box = document.getElementById("box");
    box.addEventListener('mousedown', (e) => {
        let x_down = e.clientX;
        let y_down = e.clientY;
        x1 = x_down - box.offsetLeft;
        y2 = y_down - box.offsetTop;
        box.style.cursor = 'grabbing';
        window.addEventListener("mousemove", mousemoveEvent, false)
    })
    box.addEventListener('mouseup', (e) => {
        box.style.cursor = 'grab';
        window.removeEventListener("mousemove", mousemoveEvent, false)
    })
    function mousemoveEvent(e) {
        let x = e.clientX - x1;
        let y = e.clientY - y2;
        box.style.left = x + "px";
        box.style.top = y + "px";
    }
</script>

</html>
```