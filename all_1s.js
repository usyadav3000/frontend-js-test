function all_ones(array){
    var count=0;
    var result=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            count=0;
        }
        else{
            count++;
            result=Math.max(result,count);
        }
    }
    console.log(result);
}
all_ones([1,1,0,0,1,0,1,0,1,1,1,1]);