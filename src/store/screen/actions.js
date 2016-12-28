import { makeActionCreator } from 'helpers/redux';
import actionTypes from './actionTypes';


export const change = makeActionCreator(actionTypes.CHANGE, 'nextScreen');
