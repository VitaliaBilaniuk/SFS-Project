import { combineReducers } from 'redux';
import formReducer from './Forms.reducers';

export default combineReducers({ form: formReducer });
