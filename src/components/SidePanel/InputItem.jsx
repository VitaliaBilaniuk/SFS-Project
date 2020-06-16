import React from 'react';
import '../../index.scss';

const InputItem = (props) => {
  const sfsFormInputsStyle = `Bxz(bb) W(100p) P(10) Bd(n) Bdrs(0) Bxsh(n) Bdbw(1) Bdbs(s) Bdc(#dddddd) O(n) Cur(t) Trs(300ms)-ph C(t)-ph C(#a9a9a9)-f-ph Scale(0.6)-f~label Scale(0.6)-v~label ${
    props.errors[props.name] && 'Bdc(red)'
  }`;
  const sfsFormLabelsStyle = 'Pos(a) T(10) Start(10) C(#607d8b) Trfo(0,-150p) Trs(300ms) Pe(n)';
  const sfsFormFieldsetsStyle = 'Pos(r) P(0) M(5) Bd(n) Ov(h)';

  return (
    <fieldset className={sfsFormFieldsetsStyle}>
      <input
        type={props.type}
        name={props.name}
        className={sfsFormInputsStyle}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label className={sfsFormLabelsStyle}>{props.title}</label>
      {props.errors[props.name] && (
        <span className="C(red) Fz(12)">{props.errors[props.name]}</span>
      )}
    </fieldset>
  );
};

export default InputItem;
