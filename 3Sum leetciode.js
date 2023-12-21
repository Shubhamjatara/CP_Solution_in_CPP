var threeSum = function(nums) {
    let result = [];
    let exitst = []

    
    nums = nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length;i++)
    {
    let left = i+1;
    let right = nums.length-1;

    while( left<right )
    {
        let sum = nums[i]+nums[left]+nums[right];
        if(sum === 0 && !exitst.includes([nums[i],nums[left],nums[right]].toString()))
        {
            result.push([nums[i],nums[left],nums[right]]);
            exitst.push([nums[i],nums[left],nums[right]].toString())
        }
        
        if(sum>0) right--;
        else left++;

    }
    }

    return result;
};
