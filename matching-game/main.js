import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/objects/ScoreBoard';
import CardBackSide from './src/components/CardBackSide';
import BoardGame from './src/objects/BoardGame';
import TurnArrow from './src/components/TurnArrow';

const  $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${TurnArrow()}
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);
