function getDomain(url){
    if (url.indexOf("://www.")>-1){
        return url.split("www.")[1].split("/")[0];
    }
    else{
        return url.split("://")[1].split("/")[0];
    }
}
console.log(getDomain("https://www.google.com/carbonfive/raygun"));
console.log(getDomain("http://www.google.com/carbonfive/raygun"));
console.log(getDomain("http://google.com/carbonfive/raygun"));