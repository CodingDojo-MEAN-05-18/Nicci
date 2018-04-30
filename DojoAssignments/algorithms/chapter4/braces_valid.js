function braces_valid(str){
    let array = [];
    let count = 0;
    let val = true;
    let braces =
        {
            ")":"(",
            "}":"{",
            "]":"["
        };
 
    for(let index=0; index<str.length; index++){
        if (str[index] === "(" || str[index] === "{" || str[index] === "[" ){
            array.push(str[index]);
        } 
        if (str[index] === ")" || str[index] === "}" || str[index] === "]" ){
            if (braces[str[index]] !== array.pop()){
                return false;
            }
        }
    }
    return array.length ? false : true;
}
let curr_str = 'N0{(p)}';//should be true
let curr_str2 = '[å]{}';//should be true
let curr_str3 = 'w(e)a{ther[1]0}';//should be true
let curr_str4 = '[4]5)2(dr]ar{r}n[p]'; //should be false
console.log(braces_valid(curr_str));
console.log(braces_valid(curr_str2));
console.log(braces_valid(curr_str3));
console.log(braces_valid(curr_str4));