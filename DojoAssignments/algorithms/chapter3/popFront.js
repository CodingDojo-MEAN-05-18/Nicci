function popFront(array){
    for(var i = array.length - 1; i>0; i--){
        (array.pop());
    }
    console.log(array)
}
popFront([8,1,2,'bokb']);