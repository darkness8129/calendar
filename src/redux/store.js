import { combineReducers, createStore } from 'redux';
import { calendarReducer } from './calendarReducer';

const reducers = combineReducers({ calendarReducer });

const store = createStore(reducers);

export default store;