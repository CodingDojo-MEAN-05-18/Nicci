// Array: Combine
// Create function combineArrs(arr1, arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array.Can you work completely in -place ?

function combine(arr1, arr2){
    var b = arr1.length;
    console.log(b);
    // arr1.length = arr2.length + arr1.length; 
    for(let j=0; j<arr2.length; j++){
        for(let i=0; i<b; i++){
            if((arr1[i]<=arr2[j]) && (arr2[j] < arr1[1+i])){
                arr1.length++;
                var temp1 = arr2[j];
                console.log('temp1 ' + temp1);
                var temp2 = i+1;
                console.log('temp2 ' + temp2);
                arr1[temp2]=temp1;
                arr1[i+1] = arr1[i+2];
                console.log(arr1);
                arr1[temp2] = temp1;
            } if (arr2[j] < arr1[i]){
                arr1.length++;
                arr1[i] = arr1[i+1];
                
            } else if(arr2[j]>arr1[i]) {
                arr1.push(arr2[j]);
            }
        }
    }
    return arr1;
}

console.log(combine([2, 4], [3,7]));
