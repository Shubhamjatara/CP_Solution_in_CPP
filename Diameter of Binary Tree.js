var diameterOfBinaryTree = function(root) {
    let object = {val:0}
     traverse(root,object);
     return object.val;

};

const traverse =(root,object)=>{

    if(!root) return 0;
  const left =  traverse(root.left,object);
  const right = traverse(root.right,object);
  object.val = Math.max(object.val,left+right);
  return Math.max(left,right)+1;
}
