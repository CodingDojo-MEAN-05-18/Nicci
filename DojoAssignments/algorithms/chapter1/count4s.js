function countDown(startVal,end,spacing){
    // if (startVal > end){
        var k = 0;
        while(k < startVal){
            // if(startVal < end){
                console.log('current value: ' + startVal);
                startVal = startVal - spacing;
                // console.log('current startVal: ' + startVal);
            // }
        }
    // }    
    startVal += spacing;
    return startVal;
}
console.log(countDown(2016,0,4));
// function counter(){ //PARENT SCOPE 
//     var count = 0;
//     function childScope(){ //CHILD SCOPE:KNOWS PARENT AND GLOBAL SCOPE
//         var childContent = 'child';
//         console.log('counting: ');
//         return ++count;
//     }
//     return childScope;
// }

// var incr = counter();//GLOBALLY SCOPED
// var incr2 = counter(); //GLOBALLY SCOPED

// console.log('incr', incr());
// console.log('incr', incr());
// console.log('incr', incr());
// console.log('incr2222222222', incr2());