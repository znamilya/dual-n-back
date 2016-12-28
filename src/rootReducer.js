import { combineReducers }              from 'redux';

import game from 'store/game/reducer';
import screen from 'store/screen/reducer';


export default combineReducers({
    game,
    screen,
});
