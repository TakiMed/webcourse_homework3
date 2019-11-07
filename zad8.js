function runInclusive(a,b,c){
    if (a==b){
        return "Wrong input of range";
    }
    else{
        return Boolean(Math.min(a,b)<=c && c<=Math.max(a,b));
    }
}
console.log(runInclusive(2,4,30));
console.log(runInclusive(2,2,2));
console.log(runInclusive(-2,-12,-10));