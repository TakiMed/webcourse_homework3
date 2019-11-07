function endingString(str,ends){
    return Boolean(str.substring(str.length-ends.length,str.length)===(ends));
}
console.log(endingString("strava","ava"));
console.log(endingString("strava","java"));