// note from Wes
// go to regexr.com

// 7:49 PM
// basically everything you can do there would be how the regex you build should work


function stringSearchRegex(primaryStr, regexSearch, global){
    // const result = null;
    const re = new RegExp(regexSearch, global);
//////////trying our regex patterns
    console.log('re: ' + re);
    const numberRegex = new RegExp('\\d', 'g');
    console.log('numberRegex:  ' + numberRegex);
    // const numberRegex = new RegExp('\\d');
    let numArr = primaryStr.match(numberRegex);
    console.log('numArr: ' + numArr);
    let reArr = primaryStr.match(re);
    console.log('reArr: ' + reArr);
    console.log(primaryStr);
////////////////end of regex play! woo hoo!
    console.log(reArr);
    if (reArr === null || undefined){
        const result = -1;
        return result;
    } else {
        result = reArr.length;
    }
    return result;
}
primaryPlay = 'dud4e5';
searchPlay = '\\d';
globalPlay = 'g'; // options are either '' or 'g'
console.log(stringSearchRegex(primaryPlay, searchPlay, globalPlay));

primary1 = 'dude dude dude';
search1 = '[q-z]';
global1 = 'g'; // options are either '' or 'g'
console.log(stringSearchRegex(primary1, search1, global1));
// ("[q-z]") --> 1; find any characters between q - z;

primary2 = 'dude dude dude ';
search2 = '(ud)';
global2 = 'g'; // options are either '' or 'g'
console.log(stringSearchRegex(primary2, search2, global2));
// ("(ud)") --> 1; find the matches of the interrogation

primary3 = 'dudedudedude';
search3 = '[^a-e]';
global3 = 'g'; // options are either '' or 'g'
console.log(stringSearchRegex(primary3, search3, global3));
// ("[^a-e]") --> 1; find the matches of the interrogation

primary4 = 'dude dad failed';
search4 = 'd$';
global4 = 'g'; // options are either '' or 'g'
console.log(stringSearchRegex(primary4, search4, global4));
// ("d$") --> -1; find the matches of the interrogation
