import { GET_FORM_DATA, SET_FORM_DATA } from './types.js';

export const getFormData = () => ({
  type: GET_FORM_DATA,
});

export const setFormData = (input, value) => ({
  type: SET_FORM_DATA,
  payload: { input, value },
});
