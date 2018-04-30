function join_two(arr){
    let joined = '';
    for (let index = 0; index < arr.length; index++){
        joined = joined + arr[index];
    }
    return joined;
}

str_arr = ['o','i','g','o'];
console.log(join_two(str_arr));