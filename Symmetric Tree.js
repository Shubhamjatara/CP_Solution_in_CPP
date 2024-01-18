var isSymmetric = function(root) {
    
    if(!root) return true;
    if(traverse(root.left,root.right)) return true;
    return false;

};

const traverse = (leftRoot,rightRoot)=>{
     if(!leftRoot && !rightRoot) return true;
    if(leftRoot?.val !== rightRoot?.val) return false;
   

  const res1 =  traverse(leftRoot.left,rightRoot.right);
  const res2 =   traverse(leftRoot.right,rightRoot.left);
  if(!res1 || !res2) return false;
   
    return true;

}
