function insert(arr,index_val,insert_val){
    for (var i = arr.length - 1; i >= index_val; i--) {
        // console.log(arr) ;
        arr[i + 1] = arr[i];
    }
    arr[index_val] = insert_val;
    // console.log(arr);
    return arr;
} 
// works - COOL!
// console.log(insert([0],7, "past arr len"))

console.log(insert([1,'maya',2,3,'Oliver'],3,'ashton'))

// works
// console.log(insert([2, 4, 'help','hello',5,22], 2, 'ash')) 



