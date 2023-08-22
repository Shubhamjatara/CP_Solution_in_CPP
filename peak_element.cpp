int peakElement(int arr[], int n)
{
    int ans = INT_MIN;
    int index = 0;

    for (int i = 0; i < n; i++)
    {
        if (i == 0 && arr[i] >= arr[i + 1] && ans <= arr[i])
        {

            ans = arr[i];
            index = i;
            continue;
        }

        if (n - 1 == i && arr[i] >= arr[i - 1] && ans <= arr[i])
        {
            ans = arr[i];
            index = i;
            continue;
        }

        // preventing from exceed last index and first index
        if (i == n - 1 || i == 0)
            continue;

        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
        {
            if (ans <= arr[i])
            {
                ans = arr[i];
                index = i;
            }
        }
    }

    return index;
}