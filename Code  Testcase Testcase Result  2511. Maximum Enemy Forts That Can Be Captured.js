var captureForts = function (forts) {

  let val = 1;
  let val2 = -1;
  let flg = true;
  let count = 0;
  let ans = 0;
  for(let i=0;i<forts.length;i++)
  {
    if((forts[i]!=1 || forts[i]!=-1)&&flg)
    {
      if(forts[i]==1){val=1;val2=-1;flg=false;}
      if(forts[i]==-1){val=-1;val2=1;flg=false;}
      continue;
    }

  
    if(i>forts.length) break;
    if(forts[i]==0) {flg=false; count++; continue;}
    if(forts[i]==val2)
    {
      ans=Math.max(ans,count);
      flg=true;
      count=0;
      i--;
      continue;
    }
    i--
    flg=true;
    count=0;
  }

  return ans;


};
