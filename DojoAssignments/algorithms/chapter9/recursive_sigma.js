// function recursive_sigma(num){
//     let number = Math.floor(num);
//     var temp = 0;
//     for(let index=0; index<number;index++){
//         var value = number -index;
//         temp = temp + value;
//     }
//     return temp;
// }

function recursive_sigma(num){
    var returnVal = 0;
    if (num >= 1) {
        var intNum = Math.trunc(num);
        //line 17 puts data from the recursive function on the "call stack"
        var prevVal = recursive_sigma(intNum-1);
        //line 19 
        console.log('intNum: ' + intNum);
        console.log('prevVal: ' + prevVal);
        returnVal = prevVal + intNum;
    }
    return returnVal;
}

console.log(recursive_sigma(7));
// console.log(recursive_sigma(6));
// console.log(recursive_sigma(2.5));
// console.log(recursive_sigma(-1));