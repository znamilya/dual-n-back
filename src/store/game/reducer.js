import { random } from 'helpers/math';
import actionTypes from './actionTypes';


export const STATE_MAP = {
    prepare: 1,
    running: 2,
    finished: 3,
};

const availableLetters = ['l', 't', 'k', 'm', 'h'];

const defaultState = {
    state: STATE_MAP.prepare,
    step: -1,
    totalSteps: 24,
    letters: [],
    positions: [],
    quess: {
        position: false,
        letter: false,
    },
    score: {
        positions: 0,
        letters: 0,
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
        const letter = availableLetters[random(0, 4)];

        result.push(letter);
    }

    return result;
}

const checkIfPositionQuessIsCorrect = () => {

}
const checkIfLetterQuessIsCorrect = () => {

}

export default function game(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.PREPARE: {
            return {
                ...state,
                state: STATE_MAP.prepare,
                letters: generateLetters(state.totalSteps, action.n),
                positions: generatePositions(state.totalSteps, action.n),
            };
        }

        case actionTypes.START: {
            return {
                ...state,
                state: STATE_MAP.running,
            };
        }

        case actionTypes.QUESS: {
            return {
                ...state,
                quess: {
                    ...state.quess,
                    [action.target]: true,
                },
            };
        }


        case actionTypes.NEXT_STEP: {
            return {
                ...state,
                step: state.step + 1,
                quess: {
                    position: false,
                    letter: false,
                },
            };
        }

        case actionTypes.CALC_STEP_SCORE: {
            return {
                ...state,
                quess: {
                    positions: checkIfPositionQuessIsCorrect(),
                    letters: checkIfLetterQuessIsCorrect(),
                }
            };
        }

        case actionTypes.FINISH: {
            return {
                ...defaultState,
                state: STATE_MAP.finished,
            };
        }

        default: {
            return state;
        }
    }
}
