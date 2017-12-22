// var arr1 = ['a','b'];
// var arr2 = [1,2];

// function concat(arr1, arr2) {
//     var newArr = [];

//     for(var i = 0; i < arr1.length; i++){
//         newArr.push(arr1[i]);
//     };

//     for(var i= 0; i<arr2.length;i++){
//         newArr.push(arr2[i]);
//     };

//     return newArr;
// };

// console.log(concat(arr1,arr2));
// ------------
// var arr1 = ['a', 'b'];
// var arr2 = [1, 2];

// function concat(arr1, arr2) {
//     var newArr = arr1;

//     for (var i = 0; i < arr2.length; i++) {
//         newArr.push(arr2[i]);
//     };
//     return newArr;
// };
// console.log(concat(arr1, arr2));
// console.log(arr1); 
//this will change the original array - pointers
// -----------------
var arr1 = ['a','b'];
var arr2 = [1,2];

function concat(arr1, arr2) {
    var newArr = [];

    for(var i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
    };

    for(var i= 0; i<arr2.length;i++){
        newArr.push(arr2[i]);
    };

    return newArr;
};

console.log(concat(arr1,arr2));
