import { createActionTypes } from 'helpers/redux';


export default createActionTypes('game', [
    'UPDATE_N',
    'PREPARE',
    'START',
    'QUESS',
    'NEXT_STEP',
    'CALC_STEP_SCORE',
    'FINISH',
]);
