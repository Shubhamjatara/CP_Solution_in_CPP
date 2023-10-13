var evaluateTree = function(root) {
    return solve(root)
};

function solve(head)
{
    
    //  if(head == null) return false;

    if(head.val == 1)
    {
        return true;
    }

    if(head.val ==0) return false;

    let opr = solve(head.left);
    let opr1 = solve(head.right);
    let ans ;

    if(head.val == 3)
    {
        ans = (opr && opr1)
    }

    if(head.val == 2)
    {
        ans = (opr|| opr1)
    }

    return ans;
}
