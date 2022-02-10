import './style.css'

function TurnArrow(currentPlayer = 1){

    return/*html*/`
        <img class='turn-arrow' 
             src='images/IconArrowDown.png' 
             alt='icone de uma seta voltada para baixo'
             data-currentPlayer='${currentPlayer}'    
        >
    `

}

export default TurnArrow;

 // <div class='turn-arrow'>
        //     <img src='images/IconArrowDown.png' alt='icone de uma seta voltada para baixo'>
        // </div>