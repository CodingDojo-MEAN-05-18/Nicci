// function insert(arr,index_val,insert_val){
//     for (var i = arr.length - 1; i >= index_val; i--) {
//         console.log(arr) ;
//         arr[i + 1] = arr[i];
//     }
//     arr[index_val] = insert_val;
//     console.log(arr);
//     return arr;
}
// insert([2,4,'help'],6,'ash')
// insert([2, 4, 'help','hello',5,22], 2, 'ash')
// --------------

function findNumber(arr,k){
    var decision = 0;
    for (var i = 0; i < 2; i++) {
        if (arr[i] === k) {
            console.log(k);
        } 
        else{
            decision = "NO";
        }   
    }
    console.log(decision);
}
findNumber([0, 1, 2, 3], 2)