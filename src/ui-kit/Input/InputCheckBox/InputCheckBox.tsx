import React from 'react';
import classnames from 'classnames'
import '../Input.scss'

export interface IInputProps {
    className?: string;
    checkboxLabel?: string;
}

const InputCheckBox: React.SFC<IInputProps> = ({
    className,
    checkboxLabel
}) => {
    const styleInputCheckbox = classnames(className, {
        'input-checkbox': true,
        'input-checkbox__label': checkboxLabel
    })

    return (
        <label className={styleInputCheckbox}>
            {checkboxLabel}
            <input type="checkbox" />
            <span className="checkmask"></span>
        </label>
    )
}

export default InputCheckBox;