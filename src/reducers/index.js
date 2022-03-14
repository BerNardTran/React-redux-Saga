import { combineReducers } from 'redux';
import counterReducers from './counter';

const myReducer = combineReducers({
    counterReducers
});

export default myReducer;