var smallestRangeI = function(nums, k) {
  let arr = nums.sort((a,b)=>a-b);

  let min = arr[0];
  let max = arr[arr.length-1];
  let start = -k;
  let end = k;
  let minANS = Number.MAX_SAFE_INTEGER
 
  while(start <= end)
  {
    
      let tempMin = min+end;
      let tempMax = max+start;

      if(tempMin <= tempMax)
      { 
       
          minANS = Math.min(minANS,(tempMax - tempMin));

      }

      if(tempMin > tempMax)
      {
          end--;
          continue;
      }
      if(tempMin < tempMax)
      {
          start++;
          continue;
      }
      start++;
      end--;
  }

  return minANS;
};
