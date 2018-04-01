//lecture solution 2/17/18
// TAKE CARE OF EDGE CASE ''
function split(str, separator, limit){
    var result = [];
    var subStr = '';
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
            result.push(subStr);
            subStr = '';
            i += separator.length - 1;
        }
    }
    result.push(subStr);
    console.log(result);
    return result;
}
var test = 'this/is/a/string';
split(test,'/is');