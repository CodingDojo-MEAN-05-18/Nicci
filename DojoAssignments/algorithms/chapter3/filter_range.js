function filterRange(arr,min,max){
    var inner_count = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){       
        if (arr[i] > min && arr[i] < max){           
            console.log('count in if: ' + count);
            for(var k=count; k < arr.length; k++){ 
                arr[k] = arr[k+1];
                console.log('arr: ' + arr);
            } 
            count = 0; 
            inner_count += 1;        
        }
        count += 1;  
    }
    console.log("inner_count: " + inner_count);
    arr.length -= inner_count;    
    console.log('new arr:' + arr);
    console.log('min: ' + min);
    console.log('max: ' + max);
}
// filterRange([-10,3,9,1,7,4,2,3],5,75);
filterRange([0,1,2,-2,.4,-5],1,4);