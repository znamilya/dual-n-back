import gameActionTypes from 'store/game/actionTypes';
import actionTypes from './actionTypes';


const defaultState = {
    position: false,
    letter: false,
};


export default function quess(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.FIRE: {
            return Object.assign({}, state, {
                [action.target]: true,
            });
        }

        case gameActionTypes.NEXT_STEP: {
            return Object.assign({}, defaultState);
        }

        default: {
            return state;
        }
    }
};
