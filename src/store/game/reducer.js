import { random } from 'helpers/math';
import actionTypes from './actionTypes';


const defaultState = {
    isRunning: false,
    isFinished: false,
    step: 0,
    totalSteps: 25,
    letters: [],
    positions: [],
    quess: {
        position: false,
        letter: false,
    },
}

const generatePositions = (length, n) => {
    const result = [];

    for (let i = 0; i < length; i ++) {
        result.push(random(0, 8));
    }

    return result;
}

const generateLetters = (length, n) => {
    const result = [];

    for (let i = 0; i < length; i ++) {
        result.push('l');
    }

    return result;
}


export default function game(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.START: {
            return Object.assign({}, state, {
                isRunning: true,
                letters: generateLetters(state.totalSteps, action.n),
                positions: generatePositions(state.totalSteps, action.n),
            })
        }

        case actionTypes.QUESS: {
            return Object.assign({}, state, {
                [action.target]: true,
            });
        }


        case actionTypes.NEXT_STEP: {
            return Object.assign({}, state, {
                step: state.step + 1,
                quess: {
                    position: false,
                    letter: false,
                },
            });
        }


        case actionTypes.FINISH: {
            return Object.assign({}, defaultState, {
                isFinished: true,
            });
        }

        default: {
            return state;
        }
    }
}
