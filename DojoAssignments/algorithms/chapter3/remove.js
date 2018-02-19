function remove_at_and_return(arr, index_to_remove) {
    value = arr[index_to_remove];
    console.log(value);
    for(var i=index_to_remove; i <= arr.length-1; i++){
        arr[i] = arr[i+1];
        // console.log(arr[i]);
    } 
    // arr.pop();
    arr.length -= 1;
    console.log(arr);
    return value;
}

console.log((remove_at_and_return([1, 'Maya', 2, 'Ashton', 3, 'Oliver'], 3)));
// var test = [1, 'hi', 2, 'hello', 'another'];
// removeAt(test, 3);
// console.log(test);