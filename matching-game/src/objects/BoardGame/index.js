import CardBackSide from '../../components/CardBackSide';

import './style.css';

function BoardGame(amountCards){
    const $htmlCardBackSide = CardBackSide();
    const $htmlContent = $htmlCardBackSide.repeat(amountCards);

    return`
        <section class='board-game'>
            ${$htmlContent}
        </section
    `;
}

export default BoardGame;