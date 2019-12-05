$('#quit').click();
$('#restart').on('click',function(){
    Game.getRandomImage();
    Game.counter = 0;
    $('#myModal').modal('hide');
});