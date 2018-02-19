function numbersOnly(arr){
    var array =[];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            array.push();
        }
    }
    console.log(array);
}

console.log(numbersOnly([0, true, false]));
// console.log(numbersOnly());