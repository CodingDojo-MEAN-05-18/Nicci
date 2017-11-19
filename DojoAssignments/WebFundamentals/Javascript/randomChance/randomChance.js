function ranChan(quarters){
    var i = console.log(Math.trunc(Math.random()*50)+51);
    // var j = console.log(Math.trunc(Math.random() *10) + 0)
    while (quarters > 0){
        var k = (Math.floor(Math.random() * 100));
        if (k === 50) {
            quarters = quarters + 50;
            console.log("you win 50 more! you have", quarters, "left to play!");            
        }
        quarters = quarters - 1;
    }
    
}
ranChan(1500);