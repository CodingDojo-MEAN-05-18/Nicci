
function printLowReturnHigh(){
    var arr = [true, 45, 2, 9];
    // var arr = [0, 45, 9, -9];
    var high = arr[0];
    var low = arr[0];
    for(var i=0; i<=arr.length-1; i++){

        if(arr[i]<low){
            low=arr[i];
        } else if(arr[i]>high){
                high = arr[i];
        }
    }
    console.log(low);
    // return high;
    console.log(high);
}
printLowReturnHigh();