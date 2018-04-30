function split_three(str, val){
    let arr = [];
    let test_val = val;
    let temp_str = '';
    let count = 0;
    for (let index=0; index<str.length; index++){
        let x = str[index];
        console.log('x: '+x);
        temp_str = temp_str + x; 
        console.log('temp str: ' + temp_str);  
        console.log(str[index]);
        if (test_val === temp_str){
            arr[count] = temp_str;
            count++;
        }
        temp_str = '';
    }
    return arr;
}

curr_str = 'aa9bb9cc';
console.log(split_three(curr_str, '0'));