import { createStore, applyMiddleware } from 'redux';
// import { browserHistory } from 'react-router';
// import { routerMiddleware  from 'react-router-redux';

// import async from 'middleware/async.jsx';
// import combineActions from 'middleware/combineActions.jsx';
import logAction from 'middlewares/logAction';
// import thunk from 'middleware/thunk.jsx';
import rootReducer from './rootReducer';


// const router = routerMiddleware(browserHistory);
// const middlewares = [combineActions, async, router, thunk, funnel];
const middlewares = [];

// if (process.env.NODE_ENV === 'development') {
    middlewares.push(logAction);
// }


export default function (initialData) {
    return applyMiddleware(...middlewares)(createStore)(rootReducer, initialData);
}
