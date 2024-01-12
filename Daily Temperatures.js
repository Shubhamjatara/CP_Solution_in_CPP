 */
var dailyTemperatures = function(temperatures) {
      let stack = []
  let ans = new Array(temperatures.length);

  for (let last = temperatures.length - 1; 0 <= last; last--) {
    while (stack.length !== 0 && temperatures[top(stack)]  <= temperatures[last]) stack.pop();
    if (stack.length !== 0) {
      ans[last] = Math.abs(top(stack) - last);
    } else ans[last] = 0;

    stack.push(last);
  }

  return ans
};

const top = (stack) => stack[stack.length - 1];
