import CardBackSide from '../../components/CardBackSide';
import cards from './data.js'

import './style.css';

function BoardGame(amountCards){

    window.boardGame = {};
    window.boardGame.handleClick= () =>{ 

        const $boardGame = document.querySelector('.board-game');

        const $turnArrow = document.querySelector('.turn-arrow');

        const $Activecards= $boardGame.querySelectorAll('.card-back-side.-active');

        if($Activecards.length === 2){
            setTimeout(()=>{

                const currentPlayer = $turnArrow.getAttribute('data-currentplayer');

                $Activecards.forEach((card)=>card.classList.remove('-active'));

                $turnArrow.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
            },550);

        }


    }

    const htmlCardList = cards.map((card)=> CardBackSide(card.icon, card.altIcon));
    
    const $htmlCards = htmlCardList.join('')

    return/*html*/`
        <section class='board-game' onClick='boardGame.handleClick()'>
            ${$htmlCards}
        </section
    `;
}

export default BoardGame;