function getDigits(str){
    const numberRegex = new RegExp('\\d', 'g');
    // const numberRegex = new RegExp('\\d');
    let numArr = str.match(numberRegex);
    console.log('numArr: ' + numArr);
    if(!numArr){
        return str;
    }

    let result = null;
    let i = 0;
    while(numArr.length){
        const currNum = parseInt(numArr.pop());
        console.log('currNum: ' + currNum);
        result += currNum * Math.pow(10,i);
        console.log('Math.pow: ' + Math.pow(10,i));
        console.log('result: ' + result);
        i++;
    }
    return result;
}
var mixedString = "1e45566r2";
var noChar = 'hello!';
console.log(getDigits(mixedString));
console.log(getDigits(noChar));