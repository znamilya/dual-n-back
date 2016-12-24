import actionTypes from './actionTypes';


export default function screen(state = 'game', action) {
    switch (action.type) {
        case actionTypes.CHANGE: {
            return action.nextScreen;
        }

        default: {
            return state;
        }
    }
};
