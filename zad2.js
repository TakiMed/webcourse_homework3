//ne koristeci sort
function staySorted(arr,num){
    arr.push(num);
    for(i=0; i<arr.length-1; i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
        }
         }
    }
    //da vrati poziciju u nizu, a ako je gdje da se stavi samo index-1
    return arr.indexOf(num);
}
console.log(staySorted([20,2,3],19));
console.log(staySorted([-13,18,22,51,0,4],-5));