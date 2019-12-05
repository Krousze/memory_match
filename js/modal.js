$('#quit').click();
$('#restart').on('click',function(){
    Game.setUpGame()
    $('#myModal').modal('hide');
});