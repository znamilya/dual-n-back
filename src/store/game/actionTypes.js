import { createActionTypes } from 'helpers/redux';


export default createActionTypes('game', [
    'START',
    'QUESS',
    'NEXT_STEP',
    'FINISH',
]);
