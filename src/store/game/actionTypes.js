import { createActionTypes } from 'helpers/redux';


export default createActionTypes('game', [
    'PREPARE',
    'START',
    'QUESS',
    'NEXT_STEP',
    'FINISH',
]);
