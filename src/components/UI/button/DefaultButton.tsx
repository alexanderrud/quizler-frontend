import React, {FC} from 'react';
import './Button.css';
import {DefaultButtonProps} from "../../../types/Button/DefaultButtonProps";

const DefaultButton: FC<DefaultButtonProps> = (props) => {
    return (
        <div>
            <button className="quizler-default-button">
                {props.text}
            </button>
        </div>
    );
};

export default DefaultButton;