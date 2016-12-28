import { compose } from 'redux';
import { random, fitInRange, shuffle } from 'helpers/math';
import actionTypes from './actionTypes';
import { STAGE_MAP, MIN_N, MAX_N, STEPS_TOTAL_COUNT, AVAILABLE_LETTERS } from './constants';


const defaultState = {
    n: 1,
    stage: STAGE_MAP.prepare,
    step: -1,
    totalSteps: STEPS_TOTAL_COUNT,
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

const createPositionsSequence = (length) => {
    let result = [];

    for (let i = 0, j = 0; i < length; i++) {
        result.push(i % 9);
    }

    return shuffle(result);
}

const createLetterSequence = (length) => {
    let result = [];

    for (let i = 0, j = 0; i < length; i++) {
        result.push(AVAILABLE_LETTERS[i % AVAILABLE_LETTERS.length]);
    }

    return shuffle(result);
}

const createSequenceWithMatches = (sequence, n) => {
    const minMatchCount = Math.floor(Math.sqrt(10));
    let maybeMatchIndexes = [];

    for (let i = n; i < sequence.length; i++) {
        maybeMatchIndexes.push(i);
    }

    for (let i = 0; i < minMatchCount; i++) {
        const matchIndexIndex = random(0, maybeMatchIndexes.length - 1);
        const matchIndex = maybeMatchIndexes.splice(matchIndexIndex, 1)[0];

        if (matchIndexIndex - n >= 0) {
            maybeMatchIndexes.splice(matchIndexIndex - n, 1);
        }

        sequence[matchIndex] = sequence[matchIndex - n];
    }

    return sequence;
}

const isMatch = (state, key) => {
    return state[key][state.step] === state[key][state.step - state.n];
}

const updateScore = (score, isCorrect) => {
    return isCorrect ? score : score - 1;
}

export default function game(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_N: {
            return {
                ...state,
                n: fitInRange(action.nextN, MIN_N, MAX_N),
            };
        }

        case actionTypes.PREPARE: {
            return {
                ...state,
                stage: STAGE_MAP.prepare,
                letters: createSequenceWithMatches(createLetterSequence(state.totalSteps), state.n),
                positions: createSequenceWithMatches(createPositionsSequence(state.totalSteps), state.n),
                score: {
                    positions: STEPS_TOTAL_COUNT,
                    letters: STEPS_TOTAL_COUNT,
                }
            };
        }

        case actionTypes.START: {
            return {
                ...state,
                stage: STAGE_MAP.running,
            };
        }

        case actionTypes.QUESS: {
            if (state.stage !== STAGE_MAP.running) {
                return state;
            }

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
            const isPositionQuessCorrect = isMatch(state, 'positions') === state.quess.position;
            const isLetterQuessCorrect = isMatch(state, 'letters') === state.quess.letter;

            return {
                ...state,
                score: {
                    positions: updateScore(state.score.positions, isPositionQuessCorrect),
                    letters: updateScore(state.score.letters, isLetterQuessCorrect),
                },
            };
        }

        case actionTypes.FINISH: {
            return {
                ...state,
                stage: STAGE_MAP.finished,
            };
        }

        default: {
            return state;
        }
    }
}
