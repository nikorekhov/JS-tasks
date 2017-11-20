function addBlock(number){
    $('li').detach();
    for(var i = 0; i < number; i++){
        $('.block').append('<li>'+ (i+1) + '</li>');
    } 
}
function changeColor(color){
    if (flag){
        $('li').filter(':even').css('background-color', color);
        flag = false; 
    }
    else{
        $('li').filter(':odd').css('background-color', color);
        flag = true;
    }
}
var flag = true;
var color = $('#color').attr('value');
var number = $('#number').attr('value');
$(document).ready(function(){    
    $('#color').on('change',function(){
        color = $('#color').val();
        //$('ul').css('bakcground-color', color);
        changeColor(color);
    });
    $('#number').on('change',function(){
        number = $('#number').val();
        addBlock(number,color);
    });
});
