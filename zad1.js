function removeFalsy(arr){
    newarr=[]
    for (i in arr){
        if(Boolean(arr[i])===true){
            newarr.push(arr[i]);
    }
}
    return(newarr);
}

console.log(removeFalsy([1,2,3,0,0,0,[],"","ee"]));