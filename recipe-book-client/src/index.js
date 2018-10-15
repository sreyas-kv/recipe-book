import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
         <Home />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
