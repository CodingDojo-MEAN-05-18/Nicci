function factorial(num){
    var temp = 1;
    for (var i = 1; i <= num; i++) {
        temp *= i;
    }
    console.log(temp);
}
factorial(5);
