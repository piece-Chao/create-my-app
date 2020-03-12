import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './store/reducers/index';
import mapStateToProps from './store/selectors';
import MyRoute from './router';
import { HashRouter } from 'react-router-dom';
import sagas from './store/sagas';

const sagaMiddleware = createSagaMiddleware()
const App = connect(mapStateToProps, (dispatch)=>{ return {dispatch}})(MyRoute);
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
