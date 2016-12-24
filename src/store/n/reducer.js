import { fitInRange } from 'helpers/math';
import actionTypes from './actionTypes';


const MIN = 1;
const MAX = 5;


export default function n(state = 1, action) {
    switch (action.type) {
        case actionTypes.UPDATE: {
            return fitInRange(action.nextValue, MIN, MAX);
        }

        default: {
            return state;
        }
    }
};
