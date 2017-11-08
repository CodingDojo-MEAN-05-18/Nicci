
function dojocount(start, end, multi){
    for(var start=1; end<=100; start++){
        console.log(start);
        while(start<=end){
            if(start%5===0){
                console.log("Coding");
                    if(start%10===0){
                        console.log("Dojo");
                    }
            }
        }
    }
}
dojocount(1,100,5);