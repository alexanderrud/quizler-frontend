import React, {useEffect, useState} from 'react';
import './Alert.css';
import {useAlert} from "./AlertContext";
import CloseButton from "../button/CloseButton";
import Icon269Info from "../icons/269Info";
import Tick from "../icons/Tick";
import IconBxWarning from "../icons/BxWarning";
import IconBxError from "../icons/IconBxError";

const Alert = () => {
    const [alertAction, setAlertAction] = useState('alert-block-appearing');
    const {setIsShown, alertMessage, alertType} = useAlert();

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
        setTimeout(() => closeAlert(), 3000);
    });

    const closeAlert = () => {
        setAlertAction("alert-block-disappearing");
        setTimeout(() => setIsShown(false), 600);
    }

    return (
        <div>
            <div className={alertAction + " flex w-96 rounded-lg ml-auto pr-5 absolute right-0"}>
                <div className={alertType + "-card"}>
                    {typeIcons[alertType]}
                </div>
                <div className="alert-text-area">
                    {alertMessage}
                    <CloseButton onClick={closeAlert}/>
                </div>
            </div>
        </div>
    );
};

export default Alert;