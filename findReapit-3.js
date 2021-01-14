function reapingNumber(array){
    for(let i=0;i<array.length;){
     if(array[i]===array[i+1]){
         console.log(array[i]);
         break;
     }
     else{
         i++;
     }
    }
}
reapingNumber([2,4,5,5,6,7,8]);