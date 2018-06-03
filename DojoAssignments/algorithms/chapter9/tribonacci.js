function trib(n){
    if (n<2){
        return 0;
    }
    if (n === 2){
        return 1;
    }
    return trib(n-1)+trib(n-2)+trib(n-3);
}
console.log(trib(4));
console.log(trib(5));
console.log(trib(6));
console.log(trib(7));