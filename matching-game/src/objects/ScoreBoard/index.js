import './style.css';

import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VersusText from '../../components/VersusText';

import TurnArrow from '../../components/TurnArrow';

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${TurnArrow(2)}
            ${PlayerName('Player 1')}
            ${PlayerScore(3)}
            ${VersusText()}
            ${PlayerScore()}
            ${PlayerName('Player 2')}
        </header>
    `
}

export default ScoreBoard;