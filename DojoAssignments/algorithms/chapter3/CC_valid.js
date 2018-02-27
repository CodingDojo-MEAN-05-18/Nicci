function CC(arr){
    if(arr.length < 13 || arr.length > 19){
        arr = null;
        return ("CC number is not valid.  CC number must be between 13 and 19 numbers");
    } else {
        var last_digit = arr.pop();
        console.log(last_digit);
    }
    for(var i=arr.length; i > 0; i--){
        if(i%2 != 0){
            arr[i] *= 2;
        }
    }
    for(var k=0; k < arr.length; k++){
        if(arr[k] > 8){
            arr[k] = arr[k] - 9;
        }
    }
    var added = 0;
    for(var j = 0; j < arr.length; j++){
        added = added + arr[j];
    }
    console.log(added);
    var cc_num = added + last_digit;
    console.log(cc_num);
    if(i%10){
        return ("True: Valid CC.");
    } else {
        return ("False: Invalid CC.");
    }
    // return arr;
}
console.log(CC([0,0,0,0,0,0,0,0,0,5,2,2,8,2]));
// console.log(CC([5, 2, 6,0,4, 2 ,5,7,1,3,9, 2, 4, 3, 9, 2, 0, 0, 1, 7, 3]));
