$('#quit').click();
$('#restart-easy').on('click',function(){
    Game.mode = "easy";
    Game.counter = 0;
    Game.card_flip_counter = 0;
    Game.turn_count = 0;
    Game.getRandomImage();
    $('#myModal').modal('hide');
});
$('#restart-hard').on('click',function(){
    Game.mode = "hard";
    Game.counter = 0;
    Game.card_flip_counter = 0;
    Game.turn_count = 0;
    Game.getRandomImage();
    $('#myModal').modal('hide');
});