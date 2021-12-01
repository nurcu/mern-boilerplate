import React from 'react';

const PositionFormField = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                name={props.name}
                isValid={props.isValid}
            />
        </div>
    );
};

export default PositionFormField;
