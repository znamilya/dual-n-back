import { combineReducers }              from 'redux';

import game from 'store/game/reducer';
import n from 'store/n/reducer';
import screen from 'store/screen/reducer';


export default combineReducers({
    game,
    n,
    screen,
});
