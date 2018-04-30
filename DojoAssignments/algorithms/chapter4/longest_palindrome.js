function longestPal(str) {
    // arr = [];
    pal_str = '';
    let mark = (Math.floor(str.length / 2)); //5
    let count = 0;
    for(let index=0; index<str.length; index++){
        let temp = str[index];
        pal_str = pal_str + str[index];
        // console.log(pal_str);
    }
    for (let i = 0; i < mark; i++) { // make this mark?
        if (str.length % 2 !== 0) {
            if (str[mark + 1 + count] === str[mark - 1 - count]) {
                count++;
            } else {
                return false;
            }
        } else {
            if (str[mark + count] === str[mark - count - 1]) {
                count++;
            } else {
                return false;
            }
        }
    }
    return str[0];
}
let curr_str = 'da ad';
let curr_str2 = 'racecar';
console.log(longestPal(curr_str));
console.log(longestPal(curr_str2));