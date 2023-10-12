var intToRoman = function (num) {
  let map = new Map([
    ["1", "I"],
    ["5", "V"],
    ["10", "X"],
    ["50", "L"],
    ["100", "C"],
    ["500", "D"],
    ["1000", "M"],
  ]);

  let tense = 10;
  let diff = 1;
  let str = [];
  num = num.toString().split('');

  for (let i = num.length - 1; i >= 0; i--) {
    let letter = (num[i] - 0) * diff;

    if (tense - letter == diff) {
      str.unshift(map.get(tense.toString()));
      str.unshift(map.get(diff.toString()));
      tense *= 10;
      diff *= 10;
      continue;
    }

    if (tense / 2 - letter == diff) {
      str.unshift(map.get((tense / 2).toString()));
      str.unshift(map.get(diff.toString()));
      tense *= 10;
      diff *= 10;
      continue;
    }

    if (tense / 2 <= letter) {
      let whatisDiff = Math.abs((tense / 2) - letter);
      whatisDiff /= diff;
      for (let i = 0; i < whatisDiff; i++)
        str.unshift(map.get(diff.toString()));
      str.unshift(map.get((tense / 2).toString()));
      tense *= 10;
      diff *= 10;
      continue;
    }

    if (tense / 2 > letter) {
      let whatisDiff = letter / diff;
      for (let i = 0; i < whatisDiff; i++)
        str.unshift(map.get(diff.toString()));
    }
    tense *= 10;
    diff *= 10;
  }

  return str.join('')
};
