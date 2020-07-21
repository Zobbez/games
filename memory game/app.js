document.addEventListener('DOMContentLoaded', () => {

    //card settings

    const memoryCards = [

        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'fries',
            img: 'images/fries.png'
        },

        {
            name: 'batman',
            img: 'images/batman.png'
        },

        {
            name: 'batman',
            img: 'images/batman.png'
        },

        {
            name: 'cherry',
            img: 'images/cherry.png'
        },


        {
            name: 'cherry',
            img: 'images/cherry.png'
        },


        {
            name: 'heart',
            img: 'images/heart.png'
        },

        {
            name: 'heart',
            img: 'images/heart.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },

        {
            name: 'melon',
            img: 'images/melon.png'
        },

        {
            name: 'melon',
            img: 'images/melon.png'
        }
    ]

    memoryCards.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const displayResult = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // the game board

     function createGameBoard() {
        for (let i = 0; i < memoryCards.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', turnCard)
            grid.appendChild(card)
        }
     }

     // check for a card match
        function checkForMatch() {
            var cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            if (cardsChosen[0] === cardsChosen[1]) {
                alert('you made a pair')
                cards[optionOneId].setAttribute['src', 'images/white.png']
                cards[optionTwoId].setAttribute['src', 'images/white.png']
                cardsWon.push(cardsChosen)
            } else {
                cards[optionOneId].setAttribute('src', 'images/blank.png')
                cards[optionTwoId].setAttribute('src', 'images/blank.png')
                alert('no pair, try agian')
            }
            
            cardsChosen = []
            cardsChosenId = []
            displayResult.textContent = cardsWon.length
                if (cardsWon.length === memoryCards.length/2) {
                    displayResult.textContent = 'Yay you won'
                }
        }


     // turn the card

        function turnCard() {
            var cardId  = this.getAttribute('data-id')
            cardsChosen.push(memoryCards[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', memoryCards[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }

     createGameBoard()


})