import React from 'react';
import { SfsFormErrorTitle, SfsFormFieldset, SfsFormInput, SfsFormInputLabel } from './styles';

const InputItem = (props) => {
  return (
    <SfsFormFieldset>
      <SfsFormInputLabel>{props.title}</SfsFormInputLabel>
      <SfsFormInput
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        errors={props.errors[props.name]}
        required
      />
      {props.errors[props.name] && (
        <SfsFormErrorTitle>{props.errors[props.name]}</SfsFormErrorTitle>
      )}
    </SfsFormFieldset>
  );
};

export default InputItem;
