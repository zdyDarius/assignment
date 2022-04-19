/**
 * Day7手写： 
算法题：https://leetcode-cn.com/problems/rotate-list/
手写题：请用你全部能展现能力的纯CSS+Vue3代码实现该设计稿件（注：loading条根据初始化数据动态展现，且需完成动画部分同时请注意边框细节）
 */




var rotateRight = function (head, k) {
    if(!head||!head.next||k==0) return head
    let num = 1;
    let headCopy = head;
    while (headCopy.next) {
        num++;
        headCopy = headCopy.next;
    }
    let add = num - k % num;
    headCopy.next = head;
    while(add>1){
        add--;
        head = head.next;
    }
    let result = head.next;
    head.next = null
    return result;
};