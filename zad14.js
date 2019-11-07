function getDigits(str){
    var n = str.match(/\d/g);
    return parseInt(n.join(""));   
}
console.log(getDigits("Hello Roger454, how 5295 daafnalfn875082snfs"));