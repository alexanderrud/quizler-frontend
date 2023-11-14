import React from 'react';
import './Button.css';
import {DefaultButtonProps} from "../../../types/Button/DefaultButtonProps";

const DefaultButton: React.FunctionComponent<DefaultButtonProps> = ({text, type}) => {
    return (
        <div>
            <button className="quizler-default-button" type={type}>
                {text}
            </button>
        </div>
    );
};

export default DefaultButton;