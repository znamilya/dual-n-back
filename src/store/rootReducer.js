import { combineReducers }              from 'redux';

import game from './game/reducer';
import screen from './screen/reducer';


export default combineReducers({
    game,
    screen,
});
