
function quick_sort(arr){
    // if(arr.length <  2){
    //     return arr;
    // }

    var lower_arr = [];
    var middle = arr[0];
    var higher_arr = [];
    for(var idx = 1; idx< arr.length; idx++){
        if(arr[idx]<middle){
            lower_arr.push(arr[idx]);
        } else {
            higher_arr.push(arr[idx]);
        }
    }
    return quick_sort(lower_arr).concat(quick_sort(middle)).concat(quick_sort(higher_arr));
}
console.log(quick_sort([0,3,1]));
