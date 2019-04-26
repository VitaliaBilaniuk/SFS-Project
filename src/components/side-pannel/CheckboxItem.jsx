import React from 'react';

const CheckboxItem = (props) => {
    return (
        <label className="sfs-checkbox-label">
            <input type="checkbox" onChange={() => {props.propsOnChange(props.visibilityProps)}} className="sfs-checkbox-label__input" name={props.name} value={props.value}/> {props.label}
        </label>
    )
}

export default CheckboxItem;