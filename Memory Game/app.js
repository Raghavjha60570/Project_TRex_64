document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [

        {
         name: 'Mrunal', 
         img: 'images/mrunal.jpg'
        },

        { 
            name: 'anushkasheety', 
            img: 'images/anushkasheety.jpg'
         },

        { 
            name: 'kalyani',
             img: 'images/kalyani.jpg' 
         },
        { 
            name: 'sonam bajwa',
             img: 'images/sonam bajwa.webp' 
            },
        { 
            name: 'sai pallavi', 
            img: 'images/sai pallavi.jpeg' 
        },

        { 
            name: 'shruti',
             img: 'images/shruti.jpg'
             },
        { 
            name: 'ananyapandey',
             img: 'images/ananyapandey.webp' 
            },
        { 
            name: 'kajal', 
            img: 'images/kajal.jpg'
         },
        { 
            name: 'nayantara',
             img: 'images/nayantara.webp' 
            },
        { 
            name: 'patni', 
            img: 'images/patni.jpg'
         },
        { 
            name: 'samantha', 
            img: 'images/samantha.jpg'
         },
        { 
            name: 'srilele',
             img: 'images/srilele.webp'
             },
        { 
            name: 'Mrunal',
             img: 'images/mrunal.jpg'
             },
        { 
            name: 'anushkasheety',
             img: 'images/anushkasheety.jpg'
             },
        { 
            name: 'kalyani', 
            img: 'images/kalyani.jpg'
         },
        {
             name: 'sonam bajwa', 
            img: 'images/sonam bajwa.webp'
         },
        { 
            name: 'sai pallavi', 
            img: 'images/sai pallavi.jpeg'
         },
        {
             name: 'shruti',
             img: 'images/shruti.jpg'
             },
        { 
            name: 'ananyapandey', 
            img: 'images/ananyapandey.webp'
         },
        {
             name: 'kajal',
             img: 'images/kajal.jpg'
             },
        {
             name: 'nayantara', 
            img: 'images/nayantara.webp'
         },
        { 
            name: 'patni',
             img: 'images/patni.jpg'
         },
        { 
            name: 'samantha',
             img: 'images/samantha.jpg' 
         },

        {
             name: 'srilele', 
            img: 'images/srilele.webp' 
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('#grid');
    
    const resultDisplay = document.querySelector('#result');
    
    const scoreDisplay = document.querySelector('#score');

    let score = 0;
        let cardsChosen = [];
        let cardsChosenId = [];
    const cardsWon = [];

  
    function createBoard() {
        
        cardArray.forEach((_, i) => {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/guess what.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        
        });
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
         const [optionOneId, optionTwoId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
           
            cards[optionOneId].classList.add('matched');
           
            cards[optionTwoId].classList.add('matched');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
           
            cardsWon.push(cardsChosen);
            score += 10;
        
        } else {
         
            cards[optionOneId].classList.add('unmatched');
         
            cards[optionTwoId].classList.add('unmatched');
            setTimeout(() => {
                cards[optionOneId].classList.remove('unmatched');
                cards[optionTwoId].classList.remove('unmatched');
                cards[optionOneId].setAttribute('src', 'images/guess what.png');
                cards[optionTwoId].setAttribute('src', 'images/guess what.png');
            }, 500);
            score-=10;
          
        }
        let max=0;
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = `High Score: ${Math.max(score,max)}`;
        max=score;
        scoreDisplay.textContent = `Score: ${score}`;

        if (cardsWon.length === cardArray.length / 2) {
            scoreDisplay.textContent += ' Final Score!';
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');

        if (cardsChosenId.includes(cardId) || cardsWon.flat().includes(cardArray[cardId].name)) return;

        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});
