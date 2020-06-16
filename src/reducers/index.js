import { combineReducers } from 'redux';
import formReducer from './Form.reducers';

export default combineReducers({ form: formReducer });
