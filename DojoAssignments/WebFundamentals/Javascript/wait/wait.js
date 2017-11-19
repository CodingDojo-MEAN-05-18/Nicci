function wait(daysUntilMyBirthday){
    if (daysUntilMyBirthday>30){
        console.log("NNNOOOOOOoooooo....", daysUntilMyBirthday, " days is too long to wait to party!");
    }
    else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday>1){
        console.log("Only ", daysUntilMyBirthday, " more days until my birthday and I'm so excited for my party!!!");
    }
    else{
        console.log("It's my birthday and party today!!! WOOOOO!!!");
    }
}
wait(55);
wait(4);
wait(0);
