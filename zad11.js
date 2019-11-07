function mojBroker(akcije){
    var kupljeno=0;
    var prodato=0;
    listaAkcija=akcije.split(",");
    for (akcije in listaAkcija){
        simple=listaAkcija[akcije].split(" ");
        if (simple[3]=='B'){
            kupljeno+=parseFloat(simple[1])*parseFloat(simple[2]);
        }
        else if (simple[3]=='S'){
            prodato+=parseFloat(simple[1])*parseFloat(simple[2]);
        }
        else{
            return "Unesi B/S, Greška!";
        }
    }
    return ("Prodatih akcija: "+prodato+ " Kupljenih akcija: "+kupljeno)
}
akc='ZNG 1300 2.66 B,CH15.NY 50 56.32 S,OWW 1000 11.623 B,OGG 20 580.1 B'
console.log(mojBroker(akc));