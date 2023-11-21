import React, {useState} from 'react';
import './Alert.css';
import {useAlert} from "./AlertContext";
import CloseButton from "../button/CloseButton";

const Alert = () => {
    const [alertAction, setAlertAction] = useState('alert-block-appearing');
    const {setIsShown, alertMessage, alertType} = useAlert();

    const closeAlert = () => {
        setAlertAction("alert-block-disappearing")
        setTimeout(() => setIsShown(false), 600);
    }

    return (
        <div>
            <div className={alertAction + " flex w-96 rounded-lg ml-auto pr-5 absolute right-0"}>
                <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16"
                         width="20" height="20">
                        <path fillRule="evenodd"
                              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                    </svg>
                </div>
                <div
                    className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                    <div>{alertMessage}</div>
                    <CloseButton onClick={closeAlert}/>
                </div>
            </div>
        </div>
    );
};

export default Alert;