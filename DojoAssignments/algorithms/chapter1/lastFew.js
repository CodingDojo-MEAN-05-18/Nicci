function lastFew(arr, n){
    var array = [];
    for(var i=0; i<n;i++){
       temp = arr.pop(); 
       array.unshift(temp);
    }
    console.log(array)
}

lastFew([2,4,1,-9],2)


// -----------------

// function lastFew(bob,n){
//     bob.splice(0,bob.length-n);
//     console.log(bob);
// }
// lastFew([2,3,4,5],2)


// -------------------

// var bob = [2,3,4,5];
// bob.splice(0,2);
// console.log(bob);

