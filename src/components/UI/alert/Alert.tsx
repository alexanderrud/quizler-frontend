import React, {useState} from 'react';
import {AlertProperties} from "../../../types/Alert/AlertProperties";
import CloseButton from "../button/CloseButton";
import './Alert.css';

const Alert: React.FunctionComponent<AlertProperties> = ({alertType, message}) => {
    const [isShown, setIsShown] = useState(true);
    const [alertAction, setAlertAction] = useState('alert-block-appearing');
    const closeAlert = () => {
        setAlertAction("alert-block-disappearing")
        setTimeout(() => setIsShown(false), 600);
    }

    return (
        <div>
            {isShown ? (
                <div className={alertAction + " flex w-96 rounded-lg ml-auto pr-5 absolute right-0"}>
                    <div className="bg-blue-500 py-4 px-6 rounded-l-lg flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current text-white"
                            viewBox="0 0 16 16"
                            width="20"
                            height="20"
                        >
                            <path fillRule="evenodd"
                                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
                        </svg>
                    </div>
                    <div
                        className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                        <div>{message}</div>
                        <CloseButton onClick={closeAlert}/>
                    </div>
                </div>) : ''}
        </div>
    );
};

export default Alert;