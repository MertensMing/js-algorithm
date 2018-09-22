/**
 * 编写一个类，用两个栈实现队列
 * 支持队列的基本操作 add poll peek
 */

const lodash = require('lodash');

const isEmpty = function(list) {
  return !list.length;
}

class TwoStacksQueue {
  constructor() {
    this.stackPush = [];
    this.stackPop = [];
  }
  add(data) {
    this.stackPush.push(data);
  }
  poll() {
    if (isEmpty(this.stackPush) && isEmpty(this.stackPop)) {
      return null;
    } else if (isEmpty(this.stackPop)) {
      while(!isEmpty(this.stackPush)) {
        this.stackPop.push(this.stackPush.pop());
      }
    }
    return this.stackPop.pop();
  }
  peek() {
    if (isEmpty(this.stackPush) && isEmpty(this.stackPop)) {
      return null;
    } else if (isEmpty(this.stackPop)) {
      while(!isEmpty(this.stackPush)) {
        this.stackPop.push(this.stackPush.pop());
      }
    }

    return lodash.last(this.stackPop);
  }
}

const queue = new TwoStacksQueue();

queue.add(1);

console.log(queue.poll())

queue.add(2);
queue.add(3);
queue.add(4);

console.log(queue.poll())

// push [1] pop []
// push [] pop [1]
// push [] pop []
// push [2, 3, 4] pop []
// push [] pop [4, 3, 2]
