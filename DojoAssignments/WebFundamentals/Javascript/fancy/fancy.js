function fancyArray(array, string, reversed){
    if(reversed === false){
        for (var i = 0; i < array.length; i++) {
            console.log(i, string, array[i]);
        } 
    }
    else if(reversed === true){
        var temp = array[0];
        for (var j=0; j<array.length / 2; j++){
            array[j] = array[array.length - 1 - j];
            array[array.length -1 - j] = temp;
            temp = array[j + 1];
        }
        console.log(j, string, array[j]);
    }

      
}

fancyArray(["James", "Jill", "Jane", "Jack"],"~~~>", true);