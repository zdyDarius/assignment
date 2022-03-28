/**
 * Day1 :

1.手写算法
https://leetcode-cn.com/problems/add-to-array-form-of-integer/
算法目标：10分钟之内运行完成

 */


var addToArrayForm = function(num, k) {
    const length = num.length;
    const temArr = []
    for (let index = length-1; index >= 0; --index) {
      
       let sum  = num[index] + k % 10
       k = Math.floor(k/10)
       if( sum>=10 ){
           sum -=10
           k++
       }
       temArr.unshift(sum)
    }
    for(; k>0 ;  k = Math.floor(k / 10)){
        temArr.unshift(k % 10)
    }
    return temArr
};

var addToArrayForm2 = function(num, k) {
    const length = num.length;
    for (let index = length-1; index >= 0 || k > 0 ;   k = Math.floor(k / 10),--index) {
       if(index>= 0){
         k += num[index]
         num[index] = k % 10
       }else {
         num.unshift(k%10)
       }
    }
    return num

};
addToArrayForm2([0],10000)


/**
 * 2.编程题
//1.手写函数柯里化
function curry(func) {
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
手写目标：5分钟运行完成
 */

function curry(func) {
    //此处补全
  }