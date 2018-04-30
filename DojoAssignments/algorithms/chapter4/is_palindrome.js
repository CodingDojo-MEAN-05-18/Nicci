function is_pal(str){
    if(str.length % 2 == 0){
        return false;
    }
    let mark = (Math.floor(str.length/2)); //5
    let count = 1;
    for(let i=0; i<str.length/2; i++){
        if(str[mark + count] === str[mark - count]){
            count ++;
        } else {
            return false;
        }
    }
    return true;
}

function isPal(str){
    let mark = (Math.floor(str.length / 2)); //5
    let count = 0;
    for (let i = 0; i < mark; i++) { // make this mark?
        if (str.length % 2 !== 0){
            if (str[mark + 1 + count] === str[mark - 1 - count]) {
                count++;
            } else {
                return false;
            }
        } else {
            if(str[mark + count] === str[mark - count - 1]){
                count ++;
            } else {
                return false;
            }
        }
    }
    return true;        
}
let curr_str = 'ida   adi';
let curr_str2 = 'racecar';
console.log(is_pal(curr_str));
console.log(is_pal(curr_str2));
console.log(isPal(curr_str));
console.log(isPal(curr_str2));