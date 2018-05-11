// function fibonacci(val){
//     let num = val;
//     var prev = 1;
//     var curr = 1;
//     if (num === 1){
//         return num;
//     }
//     if (num < 1){
//         return 0;
//     } else {
//         var temp = prev + curr;
//         prev = curr;
//         curr = temp;
//         while(temp<5){
//             fibonacci(temp);
//             console.log(temp);
//         }
            
//         return temp;
//     }
//     return 'line 21';
// }

// console.log(fibonacci(5))

function fib(n){
    if (n<2){
        return n;
    } else {
        console.log('fib of n-1: ' + fib(n-1));
        console.log('fib of n-2: ' + fib(n-2));
        console.log('n: ' + n);
        return (fib(n-1)+fib(n-2));
    }
}

console.log(fib(6));