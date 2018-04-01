function nth_largest(arr, nth_place){
    if(arr.length < nth_place){
        arr = null;
        return ("array is too short wrt nth place value." + ("return: " + arr));
    } else {
        var temp = arr[0];
        var new_arr = [];
        // var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] < temp){
                new_arr.push(arr[i]);
                console.log(new_arr);
            }
                temp = arr[0];
                console.log(arr[0]);            
            // temp = arr[0];
            console.log('n: ' + nth_place),
            // console.log('nth element value: ' + ),
            console.log('(n-1) elements larger: ' + new_arr);
        }
    }
    // var value_in_nth_place = new_arr[nth_place];
    // return value_in_nth_place;
    return new_arr;
}
console.log(nth_largest([4,1,5,8],2));

// you need to order from largest to nth order
// loop thru all of the number and place in array in order 
// grab the nth one