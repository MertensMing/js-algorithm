const lodash = require('lodash');

class Stack {
  constructor() {
    this.stackData = [];
    this.stackMin = [];
  }
  push(data) {
    this.stackData.push(data);
    if (!this.stackMin.length || lodash.last(this.stackMin) > data) {
      this.stackMin.push(data);
    }
  }
  pop() {
    const popData = this.stackData.pop();
    if (lodash.last(this.stackMin) === popData) {
      this.stackMin.pop();
    }
    return popData;
  }
  getMin() {
    return lodash.last(this.stackMin) || null;
  }
  log() {
    console.log(this.stackData.join(','));
    console.log(this.stackMin.join(','));
  }
}

const stack = new Stack();

console.log(stack.getMin());