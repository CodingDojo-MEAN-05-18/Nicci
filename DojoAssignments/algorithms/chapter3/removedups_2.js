var sorted_array = [22, 33, 44, 44];
function removedups2(arr) {
    var remove = 0;
    var current = 0;
    var next = 1;       
    for (var i = arr.length - 1; i>= 0; i--) {
        arr[i] = arr[i + 1];
        if (arr[current] === arr[next]) {
        } else {
            next += 1;
        }    
    }        
    next += 1;
    remove += 1;  
        
    console.log(arr, 'remove: ', remove);
    arr.length -= remove;
    console.log(arr);
    return arr;
}
removedups2(sorted_array);