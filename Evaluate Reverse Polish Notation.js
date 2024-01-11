var evalRPN = function (tokens) {
  let stack = [];
  let operator = ["+", "/", "-", "*"];
  for (let i = 0; i < tokens.length; i++) {
    let val = tokens[i];
    if (!operator.includes(val)) {
      stack.push(parseInt(val));
    } else {
      let A = stack.pop();
      let B = stack.pop();

      let result = calculate(A, B, val);

      stack.push(result);
    }
  }

  return stack.pop();
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));

function calculate(A, B, op) {
  switch (op) {
    case "+":
      return A + B;
    case "-":
      return B - A;
    case "/":
      return Math.trunc(B / A);
    case "*":
      return A * B;
  }
}
