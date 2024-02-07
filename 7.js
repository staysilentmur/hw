let arr = [1,2,1,0,"1",1];
let k=0;
let m=0;
let n=0;
for (let i=0;i<arr.length;i++){{
   if (typeof(arr[i])==="number" && arr[i]!=0)
      if (arr[i]%2==0){
         k=k+1;
      }
      else{
         m=m+1;
      }
   }
   if (arr[i]==0){
    n+=1;
   }
}
console.log("количество нечетных:",m,"количество четных:",k,"количество нулей:",n);