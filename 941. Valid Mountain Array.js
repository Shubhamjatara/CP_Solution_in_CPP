var validMountainArray = function(arr) {
    let FLAG = "INC";
    let ans =  false;

    if(arr[0]>arr[1]) return false;

    for(let i=0; i<arr.length-1;i++)
    {
        if(arr[i]==arr[i+1]) return false;

        if(arr[i]<arr[i+1] && FLAG=="INC")
        {
            ans = true;
            continue;

        }
       else if(arr[i]>arr[i+1])
       {
           FLAG = "DEC";
           ans = true;
           continue;
       }

       return false;

    }

    if(FLAG!="DEC") return false;

    return ans;

};
