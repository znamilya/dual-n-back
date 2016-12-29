import 'babel-polyfill';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App/App';


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
    module.hot.accept('./components/App/App', () => {
        const NextApp = require('./components/App/App').default;

        render(NextApp);
    });
}
