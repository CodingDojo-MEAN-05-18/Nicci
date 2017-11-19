function billion(startAmt, daysto1B){
    for(var i=1; i<31; i++){
        if(startAmt>=10000){
            // console.log("days to $10,000 = ", i, ".")
        }
        startAmt = startAmt+startAmt;
    }
    console.log("In ", i, " days you will have ", startAmt, ".");
    var new = startAmt;
    var j=i;
    while new < 1000000000{
        new = new + new;
        i+=1;
    }
    console.log("In ", j, " days you will have $1B.");

}

billion(.01);
