console.log('hello');
$(document).ready(function(){
    $('character_form').submit(function(event){
        event.preventDefault();
        var userInput = $('input[name="character_name"]').val();
        console.log(userInput);
    })
});