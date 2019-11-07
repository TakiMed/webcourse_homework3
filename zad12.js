function findZeros(arr){
    var str=arr.join("");
    var zeroArray=str.split(/[1-9]/s);
    var maxlen=Math.max(...zeroArray.map(zeros => zeros.length));
    var maxArray=zeroArray.filter(zeros => zeros.length==maxlen);
    return [maxlen,str.indexOf(maxArray),maxlen+str.indexOf(maxArray)-1];
}
console.log(findZeros([0,0,0,0,2,0,0,0,3,2,2,5,0,0,0,0,0,0,0,0,5]));