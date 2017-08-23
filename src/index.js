import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <Component/>
            </div>
        </Provider>,
        rootElement
    );
}

render(App);

registerServiceWorker();
