// function reverseArr(){
//     var arr = [0, 45, 9, 0, 4, 11, 3, 8, -9];
//     var temp = arr[0]; 
//         for(i=0; i<arr.length/2;i++){
//             arr[i]=arr[arr.length-1-i];
//             arr[arr.length-1-i]=temp;
//             temp=arr[i+1];
//     }
//     console.log(arr);
// }
// reverseArr();

function reverseArr(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length / 2; i++) {
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        temp = arr[i + 1];
    }
    console.log(arr);
}
// reverseArr(["happy", 9, true, 4, 11, 3, 8, -9]);
reverseArr([3,1,6,4,2])
