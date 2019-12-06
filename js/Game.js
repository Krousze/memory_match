class Game {

    static counter = 0;
    static TURNS = 3;
    static TURN_COUNT = 0; //me
    static CARD_FLIP_COUNTER = 0;//me
    static mode = 'hard';
    static MISSES = 2;

    static getRandomImage(){
        const url = `https://dog.ceo/api/breeds/image/random/${Game.TURNS}`;
        fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(response => response.json())
        .then(json => {
            let array = json.message.map(fileName => new Card(fileName));
            array.push(...json.message.map(fileName => new Card(fileName))); 
            Game.shuffleArray(array);
            array.forEach(image => image.render(document.getElementById('body')));
        })
        .catch(function() {
            // Do nothing
        });
    }
    static shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    static win_lose() {
        if (Game.counter === Game.TURNS){
            const body = document.getElementById("body");
            body.innerHTML = '';
            $('#modal-title').text('Congratulations!');
            $('#myModal').modal('show');
        } else if (Game.isTurnCountReached()){
            const body = document.getElementById("body");
            body.innerHTML = '';
            $('#modal-title').text('Sorry, You Lose!');
            $('#myModal').modal('show');
        }
    }

    static isTurnCountReached() {
        if (Game.mode === 'hard' && Game.TURN_COUNT === Game.MISSES){
            return true;
        } else {
            return false;
        }
    }
}
