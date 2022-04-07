/**
 * Day6手写： 
1.算法题：https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
2.手写题：https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams

 */

/**
 * 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。

arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？

示例 1:

输入: arr = [5,4,3,2,1]
输出: 1
解释:
将数组分成2块或者更多块，都无法得到所需的结果。
例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 
示例 2:

输入: arr = [2,1,3,4,4]
输出: 4
解释:
我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 
注意:

arr的长度在[1, 2000]之间。
arr[i]的大小在[0, 10**8]之间。
 */

var maxChunksToSorted = function(arr) {
    let sorted = [...arr] 
    sorted = sorted.sort((a,b) => a-b);
    let sumSorted = 0;
    let sumArr = 0;
    let count = 0;
    for (i=0 ; i< arr.length; i++){
        sumArr += arr[i];
        sumSorted += sorted[i];
        console.log(sumArr,sumSorted)
        if (sumArr === sumSorted){
            count++
        }
    }
    return count
};
// console.log(maxChunksToSorted([2,1,3,4,4]))

// [5,4,3,2,1]
// [2,1,3,4,4]



//2


class MyURLSearchParams {
    /**
     * @params {string} init
     */
    constructor(init) {
        if(init[0] === '?'){
            init =  init.slice(1,init.length+1)
        }
        this.init = init.split('&');
        this.keys = [];
        this.values = [];
        this.init.forEach(item=> {
            this.keys.push(item.split('=')[0])
            this.values.push(item.split('=')[1])
        })
        console.log(this.values,this.keys,22)
    }
    
    /** 
     * @params {string} name
     * @params {any} value
     */
    append(name, value) {
        this.keys.push(name);
        if(typeof value !== 'string'){
            value = `${value}`
        }
        this.values.push(value);
    }
    
    /**
     * @params {string} name
     */
    delete(name) {
        this.keys.forEach(element => {
            
        });
    }
    
    /**
     * @returns {Iterator} 
     */
    entries() {
      
    }
    
    /**
     * @param {(value, key) => void} callback
     */
    forEach(callback) {
      
    }
    
    /**
     * @param {string} name
     * returns the first value of the name
     */
    get(name) {
      const index = this.keys.indexOf(name)
      return index >= 0 ? this.values[index]: ''
    }
    
    /**
     * @param {string} name
     * @return {string[]}
     * returns the value list of the name
     */
    getAll(name) {
       const arr = [];
       this.keys.forEach( (item,index) =>{
          if(item === name){
            arr.push(this.values[index])
          }
      })
      return arr

    }
    
    /**
     * @params {string} name
     * @return {boolean}
     */
    has(name) {
      
    }
    
    /**
     * @return {Iterator}
     */
    keys() {
      
    }
    
    /**
     * @param {string} name
     * @param {any} value
     */
    set(name, value) {
      
    }
    
    // sor all key/value pairs based on the keys
    sort() {
      
    }
    
    /**
     * @return {string}
     */
    toString() {
      
    }
    
    /**
     * @return {Iterator} values
     */
    values() {
    
    }
  }


  const params = new MyURLSearchParams('?a=1&a=2&b=2')


params.append('a', new Map())
params.append('a', undefined)
params.append('a', NaN)

const a =  params.getAll('a') ;
console.log(a)