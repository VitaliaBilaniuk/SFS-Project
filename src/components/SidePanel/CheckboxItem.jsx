import React from 'react';

const CheckboxItem = (props) => {
  return (
    <label className="D(f) Ai(c) Fz(14)">
      <input
        type="checkbox"
        onChange={() => {
          props.propsOnChange(props.visibilityProps);
        }}
        className="W(15) H(15) Cur(p)"
        name={props.name}
        value={props.value}
      />{' '}
      {props.label}
    </label>
  );
};

export default CheckboxItem;
