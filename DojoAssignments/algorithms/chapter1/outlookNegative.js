function outlookNeg(arr){
    new_arr = [];
    for(var i=0;i<arr.length;i++){
        new_arr.push(Math.abs(arr[i]));
    //     if(arr[i] < -1){
    //         arr[i]=arr[i];
    //     }
    //     else{
    //         arr[i] = Math.abs(arr[i]);
    //     }
    //     new_arr.push(arr[i]);
    }
    console.log(new_arr);
    return new_arr;
}
outlookNeg([1,-3,5]);