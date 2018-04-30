function zip(arr1, arr2){
    if(arr1.length !== arr2.length){
        return null;
    }
    let map = {};
    console.log(map);
    for (let i=0; i<arr1.length; i++){
        let key = arr1[i];
        map[key] = arr2[i];
    }
    // console.log('map: ' + map);
    return map;
}
console.log(zip([1,2,3],['maya', 'ashton', 'oliver']));