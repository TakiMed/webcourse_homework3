function malaVelika(ch){
    return {"lowerCase":ch.replace(/[^a-z]/g, "").length,"upperCase":ch.replace(/[^A-Z]/g, "").length};
}
console.log(malaVelika("YDABDJKADBybkdbbKBDKydbKDBkDBKbbB154646848"));