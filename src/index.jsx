import 'babel-polyfill';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'configureStore';
import App from './containers/App/App';


const store = configureStore();
const rootNode = document.getElementById('root');
const render = (App) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    rootNode);
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
        const NextApp = require('./containers/App/App').default;

        render(NextApp);
    });
}
