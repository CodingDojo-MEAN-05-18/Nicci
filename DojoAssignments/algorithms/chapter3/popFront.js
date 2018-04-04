
function popFront(array){
    for(let i = array.length - 1; i>0; i--){
        // console.log(array);
        (array.pop());
    }
    console.log(array);
    return array;
}
popFront([8,1,2,true]);
popFront([1,2,3]);

function popFrontTwo(arr){
    for(let i=arr.length-1; i>0; i--){
        arr.length--;
    }
    return arr;
}

console.log(popFrontTwo([2,4,1]));
