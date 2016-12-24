import actionTypes from './actionTypes';


export const change = (nextScreen) => {
    return {
        type: actionTypes.CHANGE,
        nextScreen,
    };
}
