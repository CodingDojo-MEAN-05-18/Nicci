// function acro(str){
//     let acronym = ''; //set up container to put letters into to store (could be upper or lower case)
//     let value = ''; //set up final container to put upper case values into
//     if(str[0] !== ' '){
//         acronym = acronym + str[0];
//     }   
//     for(var i=0; i < str.length; i++){
//         if(str[i] === ' ' && (str[i+1] !== ' ' || str[i+1] !== undefined)){
//             acronym = acronym + str[i+1];
//         }
//     }
//     console.log(acronym.toUpperCase());
//     value = acronym.toUpperCase();
//     return value;
// }
// console.log(acro('I want to surf at 2 pm.'));

function acro(str) {
    let acronym = ''; //set up container to put letters into to store (could be upper or lower case)
    if (str[0] !== ' ') {
        acronym = acronym + str[0];
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ' && (str[i + 1] !== ' ' || str[i + 1] !== undefined)) {
            acronym = acronym + str[i + 1];
        }
    }
    return acronym.toUpperCase();
}
console.log(acro('I want to surf at 2 pm.'));