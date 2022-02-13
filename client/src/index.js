import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from  './components/App';
import reducers from './reducers';

const store = createStore(() => [], {}, applyMiddleware()); // args > reducer, initial state of application, middleware call redux chunk

ReactDOM.render(
<Provider store={store}><App /></Provider>,
document.querySelector('#root'));  // takes two args - router component and where its going to render the component inside DOM
                        // <App /> -> jsx tags because react.DOM render expects a component instance which we creat by jsx tags
