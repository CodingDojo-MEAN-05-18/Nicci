function skyline(arr){
    var building_array = [];
    var tallest = arr[0];
    // should probably acct for san andreas fault line
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] >= tallest){
            building_array.push(arr[i]);
            tallest = arr[i];
        }
    }  
    if(building_array == ""){
        building_array = ("Verify San Andreas Fault has not been activated.");
    }
    return building_array;    
}
console.log(skyline([12,0,1,2,3,85,-5]));
console.log(skyline([0,-2,-4]));
console.log(skyline([0,-4,-2,6,12]));