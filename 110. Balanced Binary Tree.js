var isBalanced = function(root) {
    if(solve(root) == -1) return false;
    return true;
};

function solve(root)
{
    if(!root) return 0;


let left =  solve(root.left);

if(left ==  -1) return -1; 

let right = solve(root.right);

if( right == -1)  return -1;



 let diff = Math.abs((left+1)-(right+1))
 if(diff <=1) return Math.max(left,right)+1;

 if(diff > 1) return -1;
 }
 
