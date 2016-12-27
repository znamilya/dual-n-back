import { call, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import actionTypes from './actionTypes';
import * as actions from './actions';


const PREPARE_TIME_MS = 1000;
const STEP_TIME_MS = 3000;
const STEPS_COUNT = 2;

function* handlePrepare() {
    yield call(delay, PREPARE_TIME_MS);

    yield put(actions.start());

    for (let step = 0; step < STEPS_COUNT; step++) {
        yield put(actions.nextStep());
        yield call(delay, STEP_TIME_MS);
    }

    yield put(actions.finish());
}


export default function* watchGame() {
    while (true) {
        const action = yield take(actionTypes.PREPARE);

        yield handlePrepare();
    }
}
