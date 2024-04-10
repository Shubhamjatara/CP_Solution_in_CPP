function factorial(N) {
  let arr = [1];
  let carry = 0;

  for (let i = 2; i <= N; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      let pro = i * arr[j] + carry;
      let last = Math.floor(pro % 10);
      carry = Math.floor(pro / 10);
      temp.push(last);
    }

    while (carry !== 0) {
      temp.push(Math.floor(carry % 10));
      carry = Math.floor(carry / 10);
    }
    arr = [...temp];
  }

  return arr.reverse();
}
