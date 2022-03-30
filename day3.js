/**
 * Day3:
    各位同学，接下来题就全面开始真实线上环境了，大家要加油啊。
    1.编程题：https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
    2.法题：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
    🍊志佳老师🍊
 */

    /**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize=maxSize;
    this.arr = new Array()
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  CustomStack.prototype.push = function(x) {
      if ( this.arr.length < this.maxSize) {
         this.arr[this.arr.length] = x
      }
  };
  
  /**
   * @return {number}
   */
  CustomStack.prototype.pop = function() {
    if (this.arr.length) {
        return ( this.arr ).splice( this.arr.length - 1 , 1 )[0]
      }
      return -1
  };
  
  /** 
   * @param {number} k 
   * @param {number} val
   * @return {void}
   */
  CustomStack.prototype.increment = function(k, val) {
    const length = Math.min(this.arr.length, k)
    for (let i = 0; i < length; i++) {
      this.arr[i] += val
    }
  };

  
  /**
   * Your CustomStack object will be instantiated and called as such:
   * var obj = new CustomStack(maxSize)
   * obj.push(x)
   * var param_2 = obj.pop()
   * obj.increment(k,val)
   */