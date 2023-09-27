
public:
    int thirdMax(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        if (nums.size() < 3)
        {
            return nums[nums.size() - 1];
        }
        map<int, bool>::iterator it;
        map<int, bool> map;
        int count = 0;
        int result = 0;
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            it = map.find(nums[i]);
            if (it == map.end())
            {
                map.insert({nums[i], true});
                count++;
            }

            if (count == 3)
            {
                return nums[i];
            }
        }
        return nums[nums.size() - 1];
    }
