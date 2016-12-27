import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import logAction from 'middlewares/logAction';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
    middlewares.push(logAction);
// }



export default function (initialData) {
    const store = applyMiddleware(...middlewares)(createStore)(rootReducer, initialData);

    sagaMiddleware.run(rootSaga);

    return store;
}
