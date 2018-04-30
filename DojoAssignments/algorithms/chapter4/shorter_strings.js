function shorter(arr, length){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].length);
        if (arr[i].length<length){
            for(let j=i; j<arr.length;j++){
                arr[j] = arr[j+1];
            }
            i--;
            arr.length--;
        }
    }
   return arr;
}

let arr=['this is fun','a', '12345','nicci', 'oliver', 'ray', 'maya','ashton'];
console.log(shorter(arr, 7));