var checkIfExist = function(arr) {
    arr = arr.sort((a,b)=>a-b);

    let i = 1;
    let j =0;
    while(j< arr.length)
    {   
        let product = arr[j]*2;
        if(product>arr[i])
        {
            i++;
            continue;
        }

        if(arr[j] == arr[i]*2 && i!=j) return true;

        if(product == arr[i] && i !=j)
        return true;

        if(product == arr[i] && i ==j)
        {
            
            i=j+1;
            continue;
        }

        j++;

    }

    return false;
};
