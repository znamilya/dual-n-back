import actionTypes from './actionTypes';


export const start = (n) => {
    return {
        type: actionTypes.START,
        n,
    };
}

export const quess = (target) => {
    return {
        type: actionTypes.QUESS,
        target,
    };
}

export const nextStep = () => {
    return {
        type: actionTypes.NEXT_STEP,
    };
}

export const finish = () => {
    return {
        type: actionTypes.FINISH,
    };
}
