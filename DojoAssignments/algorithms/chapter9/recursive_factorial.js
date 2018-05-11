function recursiveFact(num) {
    let number = Math.trunc(Math.abs(num));
    console.log('number: '+ number);
    if (num === 0) {
        return 1;
    } else {
        var temp = 1;
        for (let index = 0; index < number ; index++) {
            var value = number - index;
            // console.log('value: ' + value);
            temp = temp * value;
            // console.log(temp);
        }
    }
    return temp;
}
console.log(recursiveFact(3)); //6
console.log(recursiveFact(6.5)); //720
console.log(recursiveFact(0)); //1
console.log(recursiveFact(-4)); //128