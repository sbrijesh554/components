import {combineReducers} from 'redux';
import {formDataReducer, inputDataReducer} from './components/compReducer';
import {counterReducer} from './components/counterReducer';

export const reducers = combineReducers({
    formData : formDataReducer,
    inputData : inputDataReducer,
    count : counterReducer
})