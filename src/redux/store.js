import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunk from 'redux-thunk'

export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk)) );