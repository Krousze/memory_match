class Card {
    
    constructor(fileName) {
        this.fileName = fileName;
    }

    //method renders individual card image
    render(parent) {
        const flipBox = this.createElement('div', 'flip-box');
        const flipBoxInner = this.createElement('div', 'flip-box-inner');
        const flipBoxFront = this.createElement('div', 'flip-box-front');
        const flipBoxBack = this.createElement('div', 'flip-box-back');

        //creates <img>
        const img = document.createElement('img');
        //adds src attribute <img src='img/fileName.jpg'>
        img.src = this.getUrl();
        //adds alt attribute <img src='img/fileName.jpg' alt='fileName'>
        img.alt = this.getAltText();
        //adds <img src='img/fileName.jpg' alt='fileName'> to DOM
        parent.appendChild(img);
        //adds eventListenter to flipBox when it is clicked
        flipBoxFront.addEventListener("click", this.flip)

        parent.appendChild(flipBox);
        flipBox.appendChild(flipBoxInner);
        flipBoxInner.appendChild(flipBoxFront);
        flipBoxInner.appendChild(flipBoxBack);
        flipBoxBack.appendChild(img);
    }

    createElement(elementType, className) {
        //create an HTML element - ex: <div></div>
        const element = document.createElement(elementType);
        //give new element a class - ex: <div class="inner"></div>
        element.classList.add(className);
        return element;
    }

    flip(event) {
        const flipBox = event.target.parentElement.parentElement;
        flipBox.classList.add('flip-box-clicked');
        const elements = document.getElementsByClassName('flip-box-clicked');

        if (elements.length === 2) {
            const cover = document.getElementById('cover');
            cover.classList.add('block');
            
            const firstElementText = elements[0].childNodes[0].childNodes[1].childNodes[0].alt;
            const secondElementText = elements[1].childNodes[0].childNodes[1].childNodes[0].alt
            if (firstElementText === secondElementText)
            { 
                setTimeout(() => {
                elements[1].childNodes[0].remove();
                elements[0].childNodes[0].remove();
                elements[1].classList.remove('flip-box-clicked');
                elements[0].classList.remove('flip-box-clicked');
                cover.classList.remove('block');
                Game.win_lose();
                }, 1500);
            } else if (firstElementText !== secondElementText) 
            {
                setTimeout(() => {
                    elements[1].classList.remove('flip-box-clicked');
                    elements[0].classList.remove('flip-box-clicked');
                    cover.classList.remove('block');
                }, 1500);
            }
        }

    }

    getUrl = () => 'img/' + this.fileName;

    getAltText = () => this.fileName.substring(0, this.fileName.lastIndexOf('.'));
    
}
