function remove_range(arr,start,end){
    remove = end - start + 1;
    var count = start;
    while (count < end + 1){
        for(var i = start; i < arr.length ; i++){
            arr[i] = arr[i+1];
        }
        console.log("array post for loop: " + arr);
        console.log('count pre +: ' + count);
        count += 1;
        console.log('count post +: ' + count);
    }
    // console.log(remove);
    arr.length -= remove;
    return ('array: ' + arr);
}
console.log(remove_range([0,1,2,3,4,5],2,5));