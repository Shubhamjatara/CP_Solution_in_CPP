 vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(),nums1.end());
        sort(nums2.begin(),nums2.end());
        vector<int>result;
        int i = 0, j = 0; 
        while( i < nums1.size() && j < nums2.size())
        {
            if(nums1[i] == nums2[j])
            {
                result.push_back(nums2[j]);
                i++;
                j++;
                continue;
            }

            if(nums1[i] > nums2[j])
            {
                j++;
            }
            else{
                i++;
            }
        }
        return result;
    }


    // two array pointer solution