function narcissticNum(num){
    newarr=[]
    sum=0;
    const n=num;
    while(num>0){
        j=num%10;
        newarr.push(j);
        num=(num-j)/10;
    }
    for (i in newarr){
        sum+=Math.pow(newarr[i],newarr.length)
    }
    return Boolean(sum==n);
}
console.log(narcissticNum(153));
console.log(narcissticNum(1634));