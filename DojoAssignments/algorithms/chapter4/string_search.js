function stringSearch(val, str){
    let position = -1;
    let subStr ='';
    let newArr = [];
    let index = null;

    if (str === '' || val < str) {
        return position; //fast fail to exit
    }

    for(let i=0; i<val.length; i++){
        let found = true;
        for(let j=0; j<str.length; j++){
            if(val[i+j] !== str[j]){
                found = false;
                break; //fast fail if no match?
            }
        }       
        if(!found){
            subStr += val[i];
        } else {
            newArr.push(subStr);
            subStr = '';
            position = i;
            return position;
        }
    }
    return position;
}
let test = ' this is a string';
console.log(stringSearch(test, ''));

