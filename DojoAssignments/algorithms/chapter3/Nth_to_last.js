function nth_to_last(arr, n_to_end){
    if(arr.length < n_to_end){
        arr = null;
        return ("array is too short with current N to End Value." + ("return: " + arr));
    } else {
        var n_to_end_value = arr[arr.length - n_to_end];
        return n_to_end_value;
    }
}
console.log(nth_to_last([0,5,2,3,1,7],2));