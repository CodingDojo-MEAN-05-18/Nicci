function trib(n){
    if (n<3){
        return 0;
    } else {
        console.log('hello');
        return (trib(n-1) + trib(n-2) + trib(n-3));
    }
    
}
console.log(trib(3));