class Game {

    static FILE_NAMES = [
        "bulldog.jpg",
        "burrito.png",
        "diet-dr-pepper.png",
        "doctors.jpg",
        "finster.jpg",
        "fluffy-destroyer-of-worlds.jpg",
        "grilled_cheese.jpg",
        "journey_doctor.jpg",
        "lord-of-the-rings.jpg",
        "metroid.jpg",
        "misbehave.jpg",
        "nes_controller.jpg",
        "pear.jpg",
        "pizza.jpg",
        "showdown.jpg",
        "soul_alignment.jpg",
        "vegeta_stages.jpg",
        "victory.jpg",
        "world.jpg",
        "yoda.png"
    ];

    //creates an array of card objects for each file
    static createCards = () => Game.FILE_NAMES.map(fileName => new Card(fileName));

    //Creates card objects and appends them to the DOM
    static setUpGame() {
        const cards = Game.createCards();
        const body = document.getElementById('body');
        cards.forEach(card => card.render(body)
);
    }
}
