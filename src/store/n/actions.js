import actionTypes from './actionTypes';


export const update = (nextValue) => {
    return {
        type: actionTypes.UPDATE,
        nextValue,
    };
}
