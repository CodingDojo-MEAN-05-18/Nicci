function dojocount(){
    for(var i=0; i<101;i++){
        console.log(i);
            if(i%5 === 0){
                console.log("Coding");
                    if(i%10 === 0){
                        console.log("Dojo");
                    }
            }
    }
    return;
}
console.log(dojocount());