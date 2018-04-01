function finalcount(param1, param2, param3, param4){
    while (param2 <= param3) {
        
        if(param2%param1===0){
            if(param2===param4){
                param2++;
                continue;
            }
            console.log(param2);
        }
        param2++;
    }
}
finalcount(3,2,12,6)

// if (NaN) {
//     console.log(true);
// } else {
//     console.log(false);
// }