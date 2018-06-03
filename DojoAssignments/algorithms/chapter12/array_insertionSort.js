function insertionSort(arr) {

    for (let index = 0; index < arr.length; index++) {
        var val = index;
        while(val >= 0) {
            if (arr[val] < arr[val-1]) {
                temp = arr[val];
                arr[val] = arr[val-1];
                arr[val-1] = temp;
            }
            val--;
        }

    }
    //// nick code below
    // # Simple iterative in -place insertion sort.
    // def iter_i_sort(some_list: List) -> None:

    // right_bound = len(some_list)

    // for idx in range(1, right_bound):
    //     insertion_val = some_list[idx]

    // while idx > 0 and some_list[idx - 1] < insertion_val:

    // some_list[idx] = some_list[idx - 1]
    // idx -= 1

    // some_list[idx] = insertion_val

    /////nick code above

    return arr;
}
console.log(insertionSort([2,18,-3,1,5,0, 35, 11]));
console.log(insertionSort([3, 0, -1, 2]));