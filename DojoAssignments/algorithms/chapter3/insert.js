function insert(arr,index_val,insert_val){
    for (var i = arr.length - 1; i >= index_val; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index_val] = insert_val;
    return arr;
} 
// works - COOL!
// console.log(insert([0],7, "past arr len"))

console.log(insert([1,'maya',2,3,'Oliver'],3,'ashton'))




