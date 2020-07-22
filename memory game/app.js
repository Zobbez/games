document.addEventListener('DOMContentLoaded', () => {

    //card settings

    const memoryCards = [

        {
            name: 'deadpool',
            img: 'images/deadpool.png'
        },

        {
            name: 'deadpool',
            img: 'images/deadpool.png'
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
            name: 'flash',
            img: 'images/flash.png'
        },


        {
            name: 'flash',
            img: 'images/flash.png'
        },


        {
            name: 'four',
            img: 'images/four.png'
        },

        {
            name: 'four',
            img: 'images/four.png'
        },

        {
            name: 'lantern',
            img: 'images/lantern.png'
        },

        {
            name: 'lantern',
            img: 'images/lantern.png'
        },

        {
            name: 'superman',
            img: 'images/superman.png'
        },

        {
            name: 'superman',
            img: 'images/superman.png'
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
            card.setAttribute('src', 'images/city.png')
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
                cards[optionOneId].setAttribute('src', 'images/city.png')
                cards[optionTwoId].setAttribute('src', 'images/city.png')
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