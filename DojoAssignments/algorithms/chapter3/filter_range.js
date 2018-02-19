function filterRange(arr,min,max){
    count = 0;
    for(var i = 0; i < arr.length; i++){  
        count += 1;  
        if (arr[i] > min && arr[i] < max){
            console.log(count);
            console.log(arr[i]);
            

            arr.length -= 1;
        }
    }
    
    
    // can i just shift over and pop off at the end?
    console.log('new arr:' + arr);
    console.log('min: ' + min);
    console.log('max: ' + max);
}
filterRange([-10,3,2,-12,66,19],0,5);