import actionTypes from './actionTypes';


export default function screen(state = 'menu', action) {
    switch (action.type) {
        case actionTypes.CHANGE: {
            return action.nextScreen;
        }

        default: {
            return state;
        }
    }
};
