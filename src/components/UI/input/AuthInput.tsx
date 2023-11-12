import React, {FC} from 'react';
import {AuthInputProps} from "../../../types/Input/AuthInputProps";
import './Input.css';

const AuthInput: FC<AuthInputProps> = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-bold mb-2">{props.name}</label>
            <input type={props.type} id={props.id} className="quizler-auth-input"/>
        </div>
    );
};

export default AuthInput;