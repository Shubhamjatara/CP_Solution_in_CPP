var canBeIncreasing = function(nums) {
      let deleted = 0;
    nums.unshift(-100000);
    nums.push(Number.MAX_SAFE_INTERGER);
    for(let i=1; i<nums.length-1;i++)
    {
     
        
        if( nums[i-1]  < nums[i]) 
        {
          continue;
        }
        if(nums[i-1]  >= nums[i])
        {
            let diff1 =( nums[i+1] - nums[i-2]);
            let diff2 =( nums[i+1] - nums[i] );
            (diff1 > diff2)? nums.splice(i-1,1) : nums.splice(i,1);
            i--;
            deleted++;
         
          
        }
        
    }
    
    if(deleted >=2) return false;
    return true;
    
};
