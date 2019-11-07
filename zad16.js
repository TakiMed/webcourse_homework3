function skolica(n){
    var status=Array.apply(null, new Array(n)).map(Number.prototype.valueOf,0);
    for (var ucenik=0;ucenik<n;ucenik++){
        for (var vrata=0;vrata<n;vrata++){
            if ((vrata+1)%(ucenik+1)==0){
                status[vrata]=Number(!status[vrata]);
            }
        }
    }
    return status.reduce((a, b) => a + b, 0);
}
console.log(skolica(6));