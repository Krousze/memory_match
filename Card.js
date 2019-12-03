class Card {
    
    constructor(fileName) {
        this.fileName = fileName;
    }

    //method renders individual card image
    render(parent) {
        //creates <img>
        const img = document.createElement('img');
        //adds src attribute <img src='img/fileName.jpg'>
        img.src = this.getUrl();
        //adds alt attribute <img src='img/fileName.jpg' alt='fileName'>
        img.alt = this.getAltText();
        //adds <img src='img/fileName.jpg' alt='fileName'> to DOM
        parent.appendChild(img);
    }

    getUrl = () => 'img/' + this.fileName;

    getAltText = () => this.fileName.substring(0, this.fileName.lastIndexOf('.'));
}
