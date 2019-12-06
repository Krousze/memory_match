$('#quit').on('click', function(){
    const p = document.createElement('p');
    p.textContent = 'Thanks For Playing!!';
    document.getElementById('body').append(p);
});
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