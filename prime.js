function prime(num){
    for(let i=i; i<=num; i++){
        if(num%i==0){
            return "Prime";
        }else{
            return "NA";
        }
    }
}
let ans = check(19);
if(ans==true){
    console.log("prime");
}else{
    console.log("NA");
}