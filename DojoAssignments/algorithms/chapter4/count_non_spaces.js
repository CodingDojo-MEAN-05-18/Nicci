function count_non_space(str){
    let count=0;
    let space_count = 0;
    for(var i=0; i<str.length; i++){
        count += 1;
    }
    console.log('count: ' + count);
    for (let index=0; index<str.length; index++){
        if(str[index] === ' '){
            space_count += 1; //determine number of spaces in string
        }
    }
    let diff = count - space_count; // determine difference in total string length without spaces
    return diff;
}

console.log(count_non_space('Algorithms, you are driving me bananas!'));
// console.log(count_non_space(''));