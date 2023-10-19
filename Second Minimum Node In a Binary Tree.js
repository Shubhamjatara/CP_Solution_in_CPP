var findSecondMinimumValue = function(root) {
    object = {arr:[]};
    solve(root,object)
    let arr = object.arr.sort((a,b)=>a-b);
    for(let i=1;i<arr.length;i++)
    {
        if(arr[0]<arr[i])return arr[i]
    }
    return -1;

};

function solve(root,object)
{
    if(!root)return null;

    solve(root.left,object)
    solve(root.right,object)

    object.arr.push(root.val);
    return null;
}
