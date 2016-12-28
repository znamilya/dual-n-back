import { call, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import actionTypes from './actionTypes';
import * as actions from './actions';
import { STEPS_TOTAL_COUNT, PREPARE_TIME_MS, STEP_TIME_MS } from './constants';


export default function* watchGame() {
    while (true) {
        const action = yield take(actionTypes.PREPARE);

        yield call(delay, PREPARE_TIME_MS);
        yield put(actions.start());

        for (let step = 0; step < STEPS_TOTAL_COUNT; step++) {
            yield put(actions.nextStep());
            yield call(delay, STEP_TIME_MS);
            yield put(actions.calcStepScore());
        }

        yield put(actions.finish());
    }
}
