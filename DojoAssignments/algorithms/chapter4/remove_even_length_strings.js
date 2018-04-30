function removeEvenStr(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].length);
        // console.log(arr[i].length % 2 === 0);
        if (arr[i].length % 2 === 0){
            for(let j=i; j<arr.length; j++){
                // console.log('before shift '+arr[j]);
                arr[j] = arr[j+1];
                // console.log('after shift ' + arr[j]);
            }
            console.log('i: '+i);
            i--;
            arr.length--;
        }
        
    }
    return arr;
}

console.log(removeEvenStr(['so', 'love', 'ray', 'my', 'dog', 'and', 'kiddos']));

// if (/^[a-z]+$/i.test(wordArr[i]) === true) {
//     count++;
