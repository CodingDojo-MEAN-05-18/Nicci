function printRange(start, end, skip){
    for(var i=start; i<end; i++){
        if(i%skip===0){
            console.log(i);
        }
    }
}


printRange(2, 10, 2);