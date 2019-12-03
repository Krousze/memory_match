console.log(new Card(fileNames[0]));
//creates an array of card objects for each file
const createCards = () => fileNames.map(fileName => new Card(fileName));

const cards = createCards();
const body = document.getElementById('body');
cards.forEach(card => card.render(body));