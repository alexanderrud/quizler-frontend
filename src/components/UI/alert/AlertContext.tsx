import React, {createContext, useContext, useState} from 'react';
import {AlertContextProps} from "../../../types/Alert/AlertContextProps";
import {AlertProviderProps} from "../../../types/Alert/AlertProviderProps";
import {AlertStatuses} from "../../../constants/AlertStatuses";

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({children}) => {
    const [isShown, setIsShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(AlertStatuses.SUCCESS);

    const contextValue: AlertContextProps = {
        isShown,
        alertMessage,
        alertType,
        setIsShown,
        setAlertMessage,
        setAlertType
    }

    return (
        <div>
            <AlertContext.Provider value={contextValue}>
                {children}
            </AlertContext.Provider>
        </div>
    );
};

export const useAlert = (): AlertContextProps => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error('useAlert must be used within an AuthProvider');
    }

    return context;
};
