import React from 'react';
import './Input.css';

const AuthInput = (props: { type: string, id: string, name: string }) => {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-bold mb-2">{props.name}</label>
            <input type={props.type} id={props.id} className="quizler-auth-input"/>
        </div>
    );
};

export default AuthInput;