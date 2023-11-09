import React from 'react';
import './Input.css';

const AuthInput = (props: { type: string, id: string }) => {
    return (
        <div>
            <input type={props.type} id={props.id} className="quizler-auth-input"/>
        </div>
    );
};

export default AuthInput;