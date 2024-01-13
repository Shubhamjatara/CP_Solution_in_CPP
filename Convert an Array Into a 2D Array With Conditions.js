var findMatrix = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) !map.has(nums[i])? map.set(nums[i], 1): map.set(nums[i], map.get(nums[i]) + 1);
  let ans = [];
  for (let i = 0; i < nums.length && map.size !== 0; i++) {
    let j = 0;
    let temp = new Set();
    while (map.size !== 0 && j < nums.length) {
      if (map.has(nums[j]) && map.get(nums[j]) > 0 && !temp.has(nums[j])) {
        temp.add(nums[j]);
        map.set(nums[j], map.get(nums[j]) - 1);
      } else if (map.get(nums[j] == 0)) map.delete(nums[j]);

      j++;
    }
    if (temp.size !== 0) ans.push([...temp]);
  }

};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));


