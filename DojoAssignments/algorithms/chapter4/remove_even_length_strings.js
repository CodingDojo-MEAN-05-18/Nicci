function removeEvenStr(arr){
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i].length % 2 === 0);
        if ((arr[i].length % 2 === 0) === true){
            for(let j=i; j<arr.length; j++){
                arr[j] = arr[j+1];
            }
            console.log(i);
            i--;
        }
    }
    return arr;
}

console.log(removeEvenStr(['love', 'my', 'dog', 'and', 'kiddos!']));

// if (/^[a-z]+$/i.test(wordArr[i]) === true) {
//     count++;
