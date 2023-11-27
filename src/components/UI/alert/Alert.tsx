import React, {useEffect, useState} from 'react';
import './Alert.css';
import {useAlert} from "./AlertContext";
import CloseButton from "../button/CloseButton";
import Icon269Info from "../icons/269Info";
import Tick from "../icons/Tick";
import IconBxWarning from "../icons/BxWarning";
import IconBxError from "../icons/IconBxError";

const Alert: React.FunctionComponent<{ alertType: string, alertMessage: string }> = (props) => {
    const {alertIsShown, hideAlert} = useAlert();
    const [animationAction, setAnimationAction] = useState('');

    interface IconTypes {
        [key: string]: React.JSX.Element
    }

    const typeIcons: IconTypes = {
        success: <Tick/>,
        info: <Icon269Info/>,
        warning: <IconBxWarning/>,
        error: <IconBxError/>
    };

    useEffect(() => {
        if (alertIsShown) {
            const animationTimeout = setTimeout(() => setAnimationAction('disappear'), 2000);
            const hideTimeout = setTimeout(() => hideAlert(), 2500);

            return () => {
                clearTimeout(animationTimeout);
                clearTimeout(hideTimeout);
            }
        }
    }, [alertIsShown]);

    return (
        <div>
            <div className={`alert-animation ${animationAction} flex w-96 rounded-lg ml-auto pr-5 absolute right-0`}>
                <div className={props.alertType + "-card"}>
                    {typeIcons[props.alertType]}
                </div>
                <div className="alert-text-area">
                    {props.alertMessage}
                    <CloseButton onClick={hideAlert}/>
                </div>
            </div>
        </div>
    );
}

export default Alert;