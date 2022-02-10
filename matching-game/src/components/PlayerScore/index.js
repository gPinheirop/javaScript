import './style.css';

function PlayerScore(points = 0){

    return /*html*/`
        <ol class='player-score' data-points="${points}">
            <li class = 'player-points'>um</li>
            <li class = 'player-points'>dois</li>
            <li class = 'player-points'>três</li>
        </ol>
    ` 

}

export default PlayerScore;