function romanNum(int){
    I = 1;
    V = 5;
    X = 10;
    L = 50;
    C = 100;
    D = 500;
    M =1000;
    string = '';
    count = 0;
    console.log(int % 10);
    let ones = int % 10;
    console.log((int % 100)/10);
    console.log(int % 1000);
    console.log(int % 10000);
    if(int<4000 || int>1){
        console.log(num = int / 1000);
        if(int > 1){
            Math.floor(num);
            for(let k=1; k<num; k++){
                count ++
                string = string + 'M'
                console.log(count);
                
            }
        }
        if(int % 10<0){
            ones=int%10;
        }
        
    }
    return string;
}

console.log(romanNum(3952));

// let x = 838475757854838
// console.log(x);
// let arr = [];
// let digitCount = 0;
// while (x > 0) {
//     digitCount++;
//     arr.push(x % 10);
//     x = Math.floor(x / 10);
//     console.log(arr);
// }
// console.log(`x has ${digitCount} digits`);