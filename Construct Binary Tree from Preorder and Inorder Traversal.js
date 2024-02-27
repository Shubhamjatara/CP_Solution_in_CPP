var buildTree = function(preorder, inorder) {
    return tree(0,preorder.length-1,preorder,inorder);
};

const tree = (left,right,preorder,inorder)=>{

     if(left > right || right < left) return null;

    const value = preorder.shift();
    const node = new TreeNode(value);
    const index = inorder.indexOf(value);
    
    node.left = tree(left,index-1,preorder,inorder);
    node.right = tree(index+1,right,preorder,inorder);
    return node;
}
