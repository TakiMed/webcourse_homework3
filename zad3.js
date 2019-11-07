function make2D(arr,num){
    newarr=[];
    const i=arr.length-num;
    newarr.push(arr.slice(0,num));
    newarr.push(arr.slice(i));
    return newarr;
}

console.log(make2D([1,2,3,4,5,6],5));
console.log(make2D([1,2,3,4],3));
console.log(make2D([1,2,3,4,5],2));