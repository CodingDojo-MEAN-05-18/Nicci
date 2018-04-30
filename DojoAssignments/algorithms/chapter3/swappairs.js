function swap(arr){
    for(let i=0; i < arr.length; i=i+2){
        if ((i%2 === 0) && !(arr[i] && arr[i+1]) === undefined){  
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            }
        }  
    return arr;
}    
console.log(swap([0,1,2,3]));
console.log(swap([0, 1, 2, 3, 8]));

// var arr=[0,1,2];
// console.log(arr);
// arr.length += 4;
// console.log(arr);
// arr.push(5);
// console.log(arr);

// bubble sort
// for-for-if

// function bubble(arr){
//     for(var ashton=0;ashton<arr.length;ashton++){
//         for(var i=0; i<arr.length;i++){
//             if (arr[i] < arr[i + 1]){
//                 temp = arr[i+1];
//                 arr[i+1] = arr[i];
//                 arr[i] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble([1,3,2,5]));
// console.log(bubble([3,2,1]));


// i - 0 to 3, exits at 4.

// -first time i = 0
// if arr[0] < arr[1] then swap, (1)<(3)-yes, swap
// -second time i = 1
// if arr[1] < arr[2] then swap
