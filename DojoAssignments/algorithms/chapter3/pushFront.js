function pushFront(arr, val) {
    for(let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
        }
        arr[0] = val;
        console.log(arr);
        return arr;
    }
let testArr1 = [1, 2, 3, 4, 5];
pushFront(testArr1, 9);