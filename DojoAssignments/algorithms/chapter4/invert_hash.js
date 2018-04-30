function invert_hash(obj){
    altered = {};
    for(key in obj){
        // console.log(key);
        // console.log(obj[key]);
        let key2 = obj[key];
        altered[key2] = key;
    }
    return altered;
}
console.log(invert_hash({'one':'1','two':'2','three':'3'}));
