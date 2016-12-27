import actionTypes from './actionTypes';


export const prepare = (n) => {
    return {
        type: actionTypes.PREPARE,
        n,
    };
}

export const start = () => {
    return {
        type: actionTypes.START,
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

export const calcStepScore = () => {
    return {
        type: actionTypes.CALC_STEP_SCORE,
    };
}

export const finish = () => {
    return {
        type: actionTypes.FINISH,
    };
}
