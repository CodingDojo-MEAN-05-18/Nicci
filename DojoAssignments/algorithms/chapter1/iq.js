function intIQ(iQ, days){
    for(var i=1; i <= days; i++){
        iQ = iQ + .01*i;
    }    
    console.log(iQ);
}
intIQ(101, 98);

-------------

function intIQ(iQ, days) {
    var addedIQ = 0;
    for (var i = 1; i <= days; i++) {
        addedIQ += i;
    }
    iQ += addedIQ * .01;
    console.log(iQ);
}
intIQ(101, 98);



// function intIQ(iQ, days) {
//     console.log(factorial(days));
//         iQ = iQ + .01 * days;
//     console.log(iQ);
// }

// intIQ(101, 98);