import './style.css';

import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VersusText from '../../components/VersusText';

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerScore()}
            ${VersusText()}
            ${PlayerScore()}
            ${PlayerName('Player 2')}
        </header>
    `
}

export default ScoreBoard;