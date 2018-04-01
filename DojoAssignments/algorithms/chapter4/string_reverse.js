function reverse(str){
    let word = '';
    let wordArr = str.split('');
    let count = 0;
    console.log(wordArr.length);
    if(wordArr.length > 1){
        for (let j = 0; j < (wordArr.length/2); j++){
            let temp = wordArr[j];
            wordArr[j] = wordArr[wordArr.length -j -1];
            wordArr[wordArr.length - j - 1] = temp;
        }
        console.log(wordArr.join(""));
    }
    return wordArr.join("");
}
console.log(reverse('wow <-- did not originally help me!'));
console.log(reverse('wow this is awesome!'));

const myArr = ['hello', 'hi', 'world', '!', 5, 'a'];
for (let str of myArr) {
    console.log(/^[a-z]+$/i.test(str));
}