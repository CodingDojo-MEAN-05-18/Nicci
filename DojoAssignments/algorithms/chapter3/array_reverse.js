var reverse_array=[0,1,2,4];
function ReverseArray(arr){
    for(var i=0; i< (arr.length/2);i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(ReverseArray(reverse_array));