function flexCount(highNum, lowNum, multi) {
    for(var i = highNum; i >= lowNum; i--){
        if ((i % multi) === 0){
            console.log(i);
        }
    }
}
flexCount(14, 8, 2);
console.log(flexCount());



