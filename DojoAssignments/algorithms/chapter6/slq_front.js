// let str = 'abc';
// console.log(1+1+str+1+1);

// // obj = {
// //     '0':9,
// //     '1': 10,
// //     '2': 11
// // }
// // console.log(obj['1']);
// // // console.log(obj.1');

// // obj2 = {
// //         'name': 'nicci',
// //         'number': '506-8877-4455',
// //         'email': 'nicci@nicci.com'
// //     };
// // console.log(obj2.number);

// // for(key in obj2){
// //     console.log(obj2['name']);
// // };

// // let thisObj= {
// //     x:5,
// //     y:[1,2,3],
// //     z:{
// //         a:1,
// //         b:2
// //     }
// // };
// // console.log(thisObj['y'][2]);
// // console.log(thisObj.z.b);
// // console.log(thisObj['z']['b']);

// function rec(num){
//     console.log('invoked', num);
//     if(num<3){
//         return rec(++num);
//     }
//     console.log('end', num);
//     return num;
// }
// console.log(rec(1));
// x = 0;
// console.log(x);
var num_arr=[0,1,2,3,4];
console.log(num_arr.pop());
console.log(num_arr);
console.log(num_arr.length);
function clear(arr){
    console.log(arr.length);
    if(arr.length > 0){
        arr.pop();
        clear(arr);       
        return arr;
    }
}
console.log(clear(num_arr));
