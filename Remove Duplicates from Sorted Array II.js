var removeDuplicates = function(nums) {
     let left = 0;
    let right = 0;
    let tempCount = 0;
    while(left < nums.length || right < nums.length)
    {
       if(nums[left]===nums[right])
       {
           tempCount++;
           if(tempCount>2)
           {
               nums.splice(right,1);
               //tempCount--;
              // right--;  
               left = right-1;         
           }
           else{
               right++;
           }
       } else if(nums[left]!==nums[right])
       {
           tempCount = 0;
           left = right;
       }
    }

    //console.log(nums)
    return nums.length;
    
};
