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


export default function game(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.PREPARE: {
            return Object.assign({}, state, {
                state: STATE_MAP.prepare,
                letters: generateLetters(state.totalSteps, action.n),
                positions: generatePositions(state.totalSteps, action.n),
            })
        }

        case actionTypes.START: {
            return Object.assign({}, state, {
                state: STATE_MAP.running,
            })
        }

        case actionTypes.QUESS: {
            return Object.assign({}, state, {
                quess: Object.assign({}, state.quess, {
                    [action.target]: true,
                })
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
                state: STATE_MAP.finished,
            });
        }

        default: {
            return state;
        }
    }
}
