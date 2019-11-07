function rnd(array){
    var a=Math.floor(Math.random()*10);
    var b=array.indexOf(a);
    if (a!==0 && b!==-1){
        array.splice(b,1);
        return a;
    }
    else{
        return rnd(array);
    }
}
function makePairs(arr){
    newarr=[];
    for (var i=0;i<4;i++){
        a1=rnd(arr);
        a2=rnd(arr);
        newarr.push([a1,a2]);
    }
    newarr.push(arr);
    return newarr;
}
console.log(makePairs([1,2,3,4,5,6,7,8,9,10]));