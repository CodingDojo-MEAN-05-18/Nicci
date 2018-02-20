function filterRange(arr) {
    var remove = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            console.log('i:'+i);
            console.log('arr val: ' + arr[i]);
            var count = i;
            for(var j=count; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            remove += 1;
            console.log("remove: " + remove);
            i -= 1;   
        }
    }
    arr.length -= remove;
    return arr;
}
console.log(filterRange([0, 2, -3, -42, 5, -4, -2, -5, -1]));