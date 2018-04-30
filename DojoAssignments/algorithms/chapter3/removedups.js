
function removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

console.log(removeDuplicates([0,1,1,2,2,2,3,4,4,4,4,4]));

// -------
// you can use a data structure like an array to push in only unique values.

// this will get you no dups with one for loop, and iterating through the original array only once.
//---------------

// function dup(arr) {
//     var i = 0;
//     while(i < arr.length) {
//         if(arr[i] === arr[i+1]) {
//             for(var j = i; j < arr.length; j++) {
//                 // console.log(j);
//                 arr[j] = arr[j + 1];
//             }
//             console.log(arr);
//             arr.length -= 1;
//             console.log(arr);
//             i--;
//         }
//         i++;
//         }
//         return arr;
//     }
// // console.log(dup([0,1,1,1,2,2,2,3]));
// console.log(dup([2,2,1,1,2,2,3,3]));

