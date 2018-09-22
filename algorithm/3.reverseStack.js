/**
 * 仅用递归操作逆序一个栈
 */

const utils = require('../utils');

function getAndRemoveLastElement(stack) {
  const result = stack.pop();
  if (utils.isEmpty(stack)) {
    return result;
  } else {
    const last = getAndRemoveLastElement(stack);
    stack.push(result);
    return last;
  }
}

function reverse(stack) {
  if (utils.isEmpty(stack)) {
    return;
  }
  const i = getAndRemoveLastElement(stack);
  reverse(stack);
  stack.push(i);
}

const stack = [1, 2, 3, 4, 5];

reverse(stack);

console.log(stack.join(','))