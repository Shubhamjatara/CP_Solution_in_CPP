function findLongestConseqSubseq(arr, N) {
  // code here
  const map = new Map();
  let maxInt = 0;
  let ans = 0;
  for (let i = 0; i < N; i++) {
    maxInt = Math.max(maxInt, arr[i]);
    if (!map.has(arr[i])) map.set(arr[i], 1);
  }

  let maxAns = 0;
  for (let i = 0; i <= maxInt; i++) {
    if (map.has(i)) {
      ans++;
      maxAns = Math.max(maxAns, ans);
    } else ans = 0;
  }

  return maxAns;
}
