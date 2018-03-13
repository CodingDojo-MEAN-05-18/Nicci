function getDigits(str){
    container = [];
    for(var i=0; i < str.length; i++){
        console.log(i, str[i]);
        if (str[i] === '0' || str[i] === '1' || str[i] === "2" || str[i] === "3" || str[i] === "4" || str[i] === "5" || str[i] === "6" || str[i] === "7" || str[i] === "8" || str[i] === "9"){

        }
        else{
            container.push(str[i]);
        }  
    }
    console.log(container);
    return str;//but this is immutable... so duh!
}
var mixedString = "1!@alj2j3";
console.log(getDigits(mixedString));

console.log(1 + 2 + "3" + "4" + 5 + 6);
var b = "hello";
console.log(b [0]);