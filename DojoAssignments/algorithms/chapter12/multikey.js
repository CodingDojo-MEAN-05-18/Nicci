// Multikey Sort
// For this challenge, you will sort an array, however the items in the array are not simple numbers.Given an array of objects, where each object contains a .firstName and a .lastName, sort the array by both last name (primary) and first name (secondary).Lee Abbey should be sorted before Aaron Carnevale, and Aaron Carnevale should be sorted before his brother Giorgio Carnevale.
// “S”.charAt(0) => numerical ascii value 
// “George”
// “Greg”

// function shift(arr){
//     for(var i=0; i<arr.length; i++){
//         arr[i] = arr[i+1];
//     }
//     return arr;
// }
function unshift(array){
    var b = array.length;
    for(var j=0; j<b; j++){
        // arr.length++;
        temp = array[j+1];
        console.log(temp);
        array[j+1]=array[j];
        array[j+2] = temp;
    }
    return array; 
}

// console.log(shift([-1,2, 4]));
console.log(unshift([-1,2,4]));