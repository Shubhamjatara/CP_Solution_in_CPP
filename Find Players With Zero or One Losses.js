var findWinners = function (matches) {
  let looser = new Map();

  for (let i = 0; i < matches.length; i++) {
    if (!looser.has(matches[i][1])) looser.set(matches[i][1], 1);
    else looser.set(matches[i][1], looser.get(matches[i][1]) + 1);
  }

  const winnderSet = new Set();
  const looserSet = new Set();
  
  for (let i = 0; i < matches.length; i++) {
    if (!looser.has(matches[i][0])) winnderSet.add(matches[i][0]);
    if (looser.get(matches[i][1]) === 1)
      looserSet.add(matches[i][1]);
  }

  return [[...winnderSet].sort((a,b)=>a-b), [...looserSet].sort((a,b)=>a-b)];
};
