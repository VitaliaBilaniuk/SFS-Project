import React from 'react';

const InputItem = (props) => {
    
    return (
        <label className="sfs-label">
            {props.title}
            <input type={props.type} name={props.name} className="sfs-input" placeholder={props.placeholder} value={props.value} onChange={props.onchange} />
        </label>
    )
}

export default InputItem;