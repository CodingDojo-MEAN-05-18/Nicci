// function leftNum(num){
//     i = 0;
//     check = 0;
//         while(i<num){
//             check = Math.pow(10,i);
//             var newNum = (num) / check;
//             if(newNum<10 && newNum>0){
//                 console.log(Math.floor(newNum));
//                 // console.log('got to the the if statement');
//                 return;
//             }
//             else{
//                 console.log("got to else statement");     
//                 // return;
//             }
//             i += 1;
//         }
// }
// leftNum(28000009977);
// leftNum(.045);



function leftNum(num) {
    i = 0;
    check = 0;
    num = Math.abs(num);
    console.log('before while');
    while (num > 0) {
        check = Math.pow(10, i);
        console.log(check);
        if (num > 1) {
            var newNum = num / check;
            console.log(Math.floor(newNum));
            console.log('inside the if statement');
            i+=1;
            // return;
        }
        else {
            console.log("got to else statement");
            // return;
        }
        i += 1;
    }
}
leftNum(-28000009977);
// leftNum(.045);



//  Wes solution - only need one while loop

// function mostSignificantDigit(num) {
//     num = Math.abs(num);
//     var sigDig = num % 10;
//     if (num < 1) {
//         while (num < 1) {
//             num *= 10;
//             sigDig = num % 10;
//             if (sigDig > 0) {
//                 console.log(Math.trunc(sigDig));
//                 return sigDig;
//             }
//         }
//     } else {
//         while (num > 0) {
//             // console.log(Math.floor(Math.abs(num) / Math.pow(10, 10 - i)) % 10);
//             num = Math.floor(num / 10);
//             if (num > 0) {
//                 sigDig = num % 10;
//             }
//             console.log(num, sigDig);
//         }
//         console.log("result", sigDig);
//     }
//     return sigDig;
// }