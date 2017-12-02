// https://drive.google.com/file/d/0B6mT1Hxs57DfSVBsZWRac0ZJQ2c/view
// https://github.com/WebFun-October-2017/Wes_Harper/tree/master/webFundamentals/ajaxAndApis/starWarsDemo
console.log('hello');
$(document).ready(function(){
    $('character_form').submit(function(event){
        event.preventDefault();
        var userInput = $('input[name="character_name"]').val();
        console.log(userInput);
    })
});