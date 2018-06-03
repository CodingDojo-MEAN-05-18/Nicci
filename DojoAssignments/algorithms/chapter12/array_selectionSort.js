function insertionSort(arr) {
    var position = 0;
    var mark = arr[0];
    var x = 0;
    for (let index = 0; index < arr.length; index++) {
        mark = arr[x];
        for (let index = 0; index < arr.length; index++) {
            console.log('mark: ' + mark);
            if (arr[index] > mark) {
                mark = arr[index];
                var curr_position = index;
                temp = arr[x];
                arr[x] = mark;
                // console.log('mark: ' + mark);
                arr[curr_position] = temp;
            }
            console.log('arr: ' + arr);
        }
        x++;
    }
    return arr;
}
console.log(insertionSort([2, -3, 1, 5, 0,-4]));