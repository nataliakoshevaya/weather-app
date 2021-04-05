import { combineReducers, createStore } from 'redux';
import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer'

let reducer = combineReducers({
    error: errorReducer,
    weather: weatherReducer
})

let store = createStore(reducer);

export default store; 