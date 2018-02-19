function printandreturn(arr){
    console.log(arr[0]);
    return arr[1];
}
var myArray = [1,2];
printandreturn(myArray);
printandreturn([3,5,99,3]);
var returnedVal = printandreturn(myArray);
console.log('returned value: ', returnedVal);