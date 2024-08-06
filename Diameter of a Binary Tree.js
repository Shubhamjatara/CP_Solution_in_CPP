class Solution {
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
        // your code here
        const obj = {ans:0};
        this.solve(root,obj);
        return obj.ans;
    }
    
    solve(root,obj)
    {
        if(!root) return 0;
        
        const left = this.solve(root.left,obj);
        const right = this.solve(root.right,obj);
        const dia = (left+right)+1;
        obj.ans = Math.max(dia,obj.ans);
        return Math.max(left,right)+1;
    }
}
