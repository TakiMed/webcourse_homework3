function rijeciKojeZavrsavajuSlovom(tekst,slovo){
    var recenice=[];
    //var i = [...tekst].filter(function (str) { return str.indexOf(".") !== -1; }).length;
    var br=0;
    recenice=tekst.match(/(.*?(?:\.|\?|!))(?: |$)/g);
    var konacanIzlaz=[]
    for (recenica in recenice){
        var pozicija=0;
        var izlaz=[]
        var brojRijeci=0;
        var rijeci=recenice[recenica].split(" ");
        for (rijec in rijeci){
            pozicija+=rijeci[rijec].length
            if (rijeci[rijec].endsWith(slovo)){
                brojRijeci+=1;
                izlaz.push({"words":rijeci[rijec],"position":rijeci[rijec].indexOf(slovo)+pozicija});
            }
        }
        izlaz.push({"num of words":brojRijeci});
        konacanIzlaz.push(izlaz)
    }
    return konacanIzlaz;
}
console.log(rijeciKojeZavrsavajuSlovom("Odstampaj mi sve rijeci koje zavrsavaju sa slovom. Ako ima vise recenica, odstampaj mi torke. Neka bude tacno.","e"));