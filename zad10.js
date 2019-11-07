function houseCount(arr){
    var sum=0;
    i=0;
    while(arr[i]!=0){
        sum+=arr[i];
        i++;
    }
    return sum;
}
console.log(houseCount([1,2,3,5,0,1,0,5]));