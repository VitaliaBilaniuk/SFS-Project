import React from 'react';

import { SfsCheckboxLabel, SfsCheckboxInput } from './styles';

const CheckboxItem = (props) => {
  return (
    <SfsCheckboxLabel>
      <SfsCheckboxInput
        type="checkbox"
        onChange={() => {
          props.propsOnChange(props.visibilityProps);
        }}
        name={props.name}
        value={props.value}
      />{' '}
      {props.label}
    </SfsCheckboxLabel>
  );
};

export default CheckboxItem;
