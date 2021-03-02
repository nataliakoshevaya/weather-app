import { createStore } from 'redux';
import weatherReducer from './weatherReducer';

let store = createStore(weatherReducer);

export default store; 