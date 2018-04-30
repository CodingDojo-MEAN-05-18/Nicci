function rotateArr(arr, shiftBy) {
    shiftBy %= arr.length;
    if(shiftBy < 0) {
        shiftBy = arr.length + shiftBy;
    }
    for (var i = 0; i < shiftBy;  i++) {
        for (var j = arr.length - 1; j > 0; j--) {
            var temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] =  temp;
        }
    }
    console.log(arr);
    return arr;
}
rotateArr([1,2,3],1);
rotateArr([1,2,3],-1);
rotateArr([1, 2, 3, 4, 5, 6], 200001);