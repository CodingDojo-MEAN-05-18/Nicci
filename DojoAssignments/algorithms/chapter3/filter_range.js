function filterRange(arr, min, max) {
    // var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < max) {
            console.log('in range');
            // arr[i] = arr[i+1];
            var count = i;
            for (var k = count; k < arr.length; k++) {
                arr[k] = arr[k + 1];
            }
            count = 0;
            arr.length --;
            i = 0;
        }
    }
    count += 1;
    console.log('new arr:' + arr);
}
filterRange([3,4,5,6,7,8,9,10],5,10);
// filterRange([0, -1,-2,-3,-4,-5], -4, 1);