var isSameTree = function(p, q) {

 const res =  traverse(p,q);
 if(res===1 ) return true;
 return false;
};

const traverse = (p,q)=>{
  
    if(p===null && q===null) return 1;
    if(!p||!q) return -1;
     if(p.val !=q.val) return -1;

const res1 = traverse(p.left,q.left);
const res2 = traverse(p.right,q.right);
if(res1===-1 || res2==-1) return -1;
return 1;
}
