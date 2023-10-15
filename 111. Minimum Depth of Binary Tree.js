var minDepth = function(root) {
    return solve(root);
};

function solve(root)
{
    if(root == null) return 0;

    let left  = solve(root.left);
    let right = solve(root.right);

    //check for leaf ndoe
    if(left == 0 && right == 0)
    {
        return 1;
    }
      //check if leftt tree does not exits
    else if(left == 0)
    {
        return right+1;
    }
      //check if right tree does not exits
    else if(right == 0)
    {
        return left+1;
    }
  //if all upper conditions goes false it means we have left and right subtree value and now return minimum 
    return Math.min(left,right)+1;
}

/*
1.First go the depth of tree so you found leaf node and we know leaf node has no child it means left == 0 and right == 0; return 1; we count last node as 1 count;
2.in case left == 0 then it means left side has not tree so we return right +1 value to ans same as right case
3. if first all condition goes false it means we have left and right subtree value and calculate minimum from both subtree and return
*/
