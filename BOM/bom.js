function addBlock(number){
    for(var i = 0; i < number; i++){
        $('.block').append('<li>'+ (i+1) + '</li>');
    } 
}
function changeColor(color){
    $('li').css('background-color', color);
}
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
