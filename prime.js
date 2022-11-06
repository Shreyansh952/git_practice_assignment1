function prime(num){
let count = 0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            count++;
        }
   }         
   if(count==2){
return true;
}else{
return false;
   }
}     
let ans=prime(19);
if(ans==true){
  console.log("Prime Number");
}else{
console.log("Not Prime");
}

 
