var minToFrontArray=[-4,1,2,-1];
function minToFront(arr){
    temp = arr[0];
    var count = 0;
    var final_count = 0;
    for(var i=0; i < arr.length; i++){     
        if (temp > arr[i]){
            temp = arr[i];
        }     
    }   
    var k = 0;
    while(k < arr.length){   
        if(arr[k] == temp){
             final_count = count;                 
        }   
        count += 1; 
        k++;    
    }
    console.log('arr: ' + arr);
    console.log('final count: ' + final_count); 
    for(var j=final_count; j >= 0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = temp;
    return arr;   
}
console.log((minToFront(minToFrontArray)));