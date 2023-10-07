 int maxArea(vector<int>& height) {
        int _maxArea = INT_MIN;
        int l = 0;
        int r = height.size()-1;
        while(l < r)
        {
            int minHeightBetweenTwoLine = min(height[l],height[r]);
            int area = minHeightBetweenTwoLine * (r-l); // (r-l) means finding width between two lines
            if(_maxArea < area)
            {
                _maxArea = area;
              
            }
           
            if(height[l] < height[r])
            {
                l++;
            }
            else{
                r--;
            }
            
        }
        return _maxArea;
    }
