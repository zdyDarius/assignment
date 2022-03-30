/**
 * Day3:
    各位同学，接下来题就全面开始真实线上环境了，大家要加油啊。
    1.编程题：https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
    2.法题：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
    🍊志佳老师🍊
 */
function allSettled(promises) {
    // your code here
    return new Promise((resolve) => {
        promises = Array.isArray(promises) ? promises : [];
        let length = promises.length;
        let resArgs = new Array(length);
        if (length === 0) {
            resolve(resArgs)
        }
        const watchResArgs = () => {
            length -= 1;
            if (length === 0) resolve(resArgs)
        }
        for (let i = 0; i < promises.length; i++) {
            if (promises[i] instanceof Promise) {
                promises[i].then(value => {
                    console.log(value)
                    resArgs[i] = { status: 'fulfilled', value }
                    watchResArgs()
                }, reason => {
                    console.log(reason)
                    resArgs[i] = { status: 'rejected',  reason }
                    watchResArgs()
                })
            } else {
                resArgs[i] = { status: 'fulfilled', value: promises[i] }
                watchResArgs()
            }
        }
    })
};

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2,2];

allSettled([1,2,3, Promise.reject('error')]).then((results) => console.log(results));

/**
* @param {number} maxSize
*/
var CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.arr = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.arr.length < this.maxSize) {
        this.arr[this.arr.length] = x
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.arr.length) {
        return (this.arr).splice(this.arr.length - 1, 1)[0]
    }
    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
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