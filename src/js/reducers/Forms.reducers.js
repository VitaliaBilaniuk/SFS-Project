import {GET_FORM_DATA, SET_FORM_DATA} from '../actions/types.js';

const initialState = {
    name: '',
    email: '',
    position: '',
    skype: '',
    website: '',
    afterword: '',
    src: ''
};


export default function formReducer(state = initialState, action) {
    switch (action.type) {
    case GET_FORM_DATA:
    return state;
    case SET_FORM_DATA:
    return {...state, [action.payload.input]: action.payload.value};
    default:
    return state;
    }
}