import React from 'react';
import './Button.css';

const DefaultButton = (props: { text: string }) => {
    return (
        <div>
            <button className="quizler-default-button">
                {props.text}
            </button>
        </div>
    );
};

export default DefaultButton;