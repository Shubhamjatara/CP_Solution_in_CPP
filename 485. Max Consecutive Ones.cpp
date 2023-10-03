
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max_ = INT_MIN;
        int count = 0;
        for(int i=0; i < nums.size(); i++)
        {
            if(nums[i] == 1) 
            {
                count++;
            }

            if(nums[i] == 0)
            {
                max_  = max(max_,count); 
                count = 0;
            }
        }

        return max(max_,count);
    }
