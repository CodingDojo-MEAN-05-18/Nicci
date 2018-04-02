//lecture solution 2/17/18
// TAKE CARE OF EDGE CASE ''
function split(str, separator, limit){
    var newArr = [];
    var subStr = '';
    console.log(separator);
    if(separator === ''){
        console.log('hi');
        return str; // why won't this return str?
    }
    for(var i=0; i<str.length; i++){
        var found  = true;
        for(var j=0; j<separator.length; j++){
            if(str[i+j] !== separator[j]) {
                found = false; 
                break; // fast fail 
            }
        }
        if(!found){
            subStr += str[i];
        } else {
            newArr.push(subStr);
            subStr = '';
            i += separator.length - 1;
        }
    }
    newArr.push(subStr);
    console.log(newArr);
    return newArr;
}
let test = 'this/is/a/string';
let testAgain = 'this is a string';
let oneMoreTest = 'this is/a/string';
split(test,'/is');
console.log(split(testAgain,''));
split(oneMoreTest, 'bat ');