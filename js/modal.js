$('#quit').click();
$('#restart').on('click',function(){
    Game.getRandomImage();
    Game.counter = 0;
    Game.CARD_FLIP_COUNTER = 0;
    Game.TURN_COUNT = 0;
    $('#myModal').modal('hide');
});