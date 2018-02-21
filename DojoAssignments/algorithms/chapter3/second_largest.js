function second_largest(arr){
    if(arr.length < 2){
        arr = null;
        return ("array does not meeet criteria." + ("return: " + arr));
    } else {
        var val1 = arr[0];
        var val2 = arr[1];
        var highest_val;
        var second_largest;
        if (val1 < val2){
            second_largest = val1;
            highest_val = val2;
        } else {
            second_largest = val2;
            highest_val = val1;
        }
        for(var i = 1; i < arr.length; i++){
            if(arr[i] > second_largest && arr[i] < highest_val){
                second_largest = arr[i];
            }
            if(arr[i] > highest_val){
                second_largest = highest_val;
                highest_val = arr[i];
            } 
        }
        return second_largest;
    }
}
console.log(second_largest([-2, 2, 4, 3]));
console.log(second_largest([2,-2,3,5,9]))
//hummm... what do characters eval to?
console.log(second_largest('nicci'));