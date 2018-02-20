function second_to_last(arr){
    var value;
    if(arr.length < 2){
        return "array is too short to properly evaluate.";
    } else {
        value = arr[arr.length - 2];
        return ("second to last value in array: " + value);
    }

}
console.log(second_to_last([1]));
console.log(second_to_last(["True", 1, "Ash", "May", "Ollie", "Ray"]));
console.log(second_to_last(["life", "is", "good", "!"]));
// return characters?
console.log(second_to_last("test"));