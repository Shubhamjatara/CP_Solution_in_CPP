var trap = function(height) {
    let left  = 0;
    let right = height.length-1;
    let maxL = 0
    let maxR = 0
    let ans = 0;
    while(left<right)
    {
        maxL = Math.max(maxL,height[left]);
        maxR = Math.max(maxR,height[right]);

        if(maxL <= maxR)
        {
            ans+= maxL - height[left];
            left++;
            continue;
        }

        if(maxL >= maxR)
        {
            ans+= maxR - height[right];
            right--;
             continue;
        }

       
    }

    return ans;

};
