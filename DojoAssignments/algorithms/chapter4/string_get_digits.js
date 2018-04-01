function getDigits(str){
    number = '';
    for(var i=0; i < str.length; i++){
        // console.log(i, str[i]);
        if (str[i] === '0' || str[i] === '1' || str[i] === "2" || str[i] === "3" || str[i] === "4" || str[i] === "5" || str[i] === "6" || str[i] === "7" || str[i] === "8" || str[i] === "9"){
            number = number.concat(str[i]);
            
        }
    }
    console.log('number: ' + number);
    return number;//but this is immutable... so duh!
}
var mixedString = "1!5@alj2j3";
console.log(getDigits(mixedString));