import React from 'react';
import '../Input.scss'

export interface IInputProps {
    placeHolder?: string;
}

const InputText: React.SFC<IInputProps> = ({
    placeHolder
}) => {
    return (
        <input className="input-text" type="text" placeholder={placeHolder} />
    )
}

export default InputText;