
#include <bits/stdc++.h>
using namespace std;

int main()
{   
   int n = 4;
  int arr[] = {0,3,1,2};
    vector<int>result =  duplicates( arr,n);

for(int i=0;i<result.size();i++)
{
    cout << result[i]<<" ";
}

    return 0;
}

//solution method using vector
vector<int> duplicates(int arr[], int n)
{

    sort(arr, arr + n);
    bool check[arr[n - 1]] = {false};
    vector<int> v;
    for (int i = 0; i < n - 1; i++)
    {
        if (arr[i] == arr[i + 1])
        {
            if (!check[arr[i]])
            {
                v.push_back(arr[i]);
                check[arr[i]] = true;
            }
        }
    }

    if (v.size() == 0)
    {
        v.push_back(-1);
        return v;
    }

    return v;
}