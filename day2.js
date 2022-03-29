/**
 * 1.手写算法
https://leetcode-cn.com/problems/shortest-distance-to-a-character
⼊选理由
①仍然是⼀道简单题，不过⽐昨天的题⽬难度增加⼀点
②虽然这是⼀个字符串的题⽬，但其实字符串和数组没有本质差别。

2.编程题
实现symbol polyfill
//题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol

🍊志佳老师🍊
 */

var shortestToChar = function() {
   let s = "aaba", c = "b";
   const array = new Array(s.length);
   let a = -1;
   for (let index = 0; index < array.length; index++) {
      if( s[index] === c ){
        array[index] = 0 ;
        for (let i = index-1; i > a ; --i) {
           if(a>=0){
            array[i]  = Math.min(Math.abs(index - i),Math.abs(a-i)) 
           }else{
            array[i]  = Math.abs(index - i)
           }

        }
        a = index
      }else{
        array[index]  = Math.abs(a - index)
      }
   }
console.log(array)
   return array

};

shortestToChar()


