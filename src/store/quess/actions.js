import actionTypes from './actionTypes';


export const fire = (target) => {
    return {
        type: actionTypes.FIRE,
        target,
    };
}
