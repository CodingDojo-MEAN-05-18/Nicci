function countbyfours(start, end, multi){
    while(start>end)
    {
        console.log(start);
        start=start-multi;
    }
}
countbyfours(10, 8, 2)