import React from 'react';
import {AuthInputProps} from "../../../types/Input/AuthInputProps";
import './Input.css';

const AuthInput: React.FunctionComponent<AuthInputProps> = ({id, type, name}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-bold mb-2">{name}</label>
            <input type={type} id={id} className="quizler-auth-input"/>
        </div>
    );
};

export default AuthInput;