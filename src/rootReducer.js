import { combineReducers }              from 'redux';

import game from 'store/game/reducer';
import n from 'store/n/reducer';
import quess from 'store/quess/reducer';
import screen from 'store/screen/reducer';


const rootReducer = combineReducers({
    game,
    n,
    quess,
    screen,
});


export default rootReducer;
