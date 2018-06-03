function bubbleSort(arr){
    var count = 0;
    notSorted = true;
    while(notSorted){
        notSorted = false;
        for(var i=0; i< arr.length-1; i++){
            count++;
            if(arr[i] > arr[i+1]){
                notSorted = true;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;

}
console.log(bubbleSort([12,-4,1,9,3]));