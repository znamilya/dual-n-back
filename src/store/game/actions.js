import { makeActionCreator } from 'helpers/redux';
import actionTypes from './actionTypes';


export const updateN = makeActionCreator(actionTypes.UPDATE_N, 'nextN');
export const prepare = makeActionCreator(actionTypes.PREPARE);
export const start = makeActionCreator(actionTypes.START);
export const quess = makeActionCreator(actionTypes.QUESS, 'target');
export const nextStep = makeActionCreator(actionTypes.NEXT_STEP);
export const calcStepScore = makeActionCreator(actionTypes.CALC_STEP_SCORE);
export const finish = makeActionCreator(actionTypes.FINISH);
