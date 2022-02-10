import CardGame from '../CardGame';
import './style.css';

function CardBackSide(icon,altIcon){

    window.cardBackSide = {};
    window.cardBackSide.handleClick = (event)=>{
        
        const $origin = event.target;
        const $cardBackSide = $origin.closest('.card-back-side');
        // if($cardBackSide.classList.contains('-active')){    
        //     $cardBackSide.classList.remove('-active')
        // }else{
        //     $cardBackSide.classList.add('-active');
        // }
        // todo esse código foi reduzido a um toggle

        $cardBackSide.classList.toggle('-active');

    }

    return /*html*/`
        <article class='card-back-side' onClick='cardBackSide.handleClick(event)'>
            <div class='card -front'>
                ${CardGame()}
            </div>
            <div class='card -back'>
                ${CardGame(icon, altIcon)}
            </div>
        </article>
    `
}

export default CardBackSide;