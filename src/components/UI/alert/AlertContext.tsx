import React, {createContext, useContext, useState} from 'react';
import {AlertContextProps} from "../../../types/Alert/AlertContextProps";
import {AlertProviderProps} from "../../../types/Alert/AlertProviderProps";

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FunctionComponent<AlertProviderProps> = ({children}) => {
    const [alertIsShown, setAlertIsShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [showSignInAlert, setShowSignInAlert] = useState(false);
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);

    const showAlert = (alertMessage: string, alertType: string) => {
        setAlertMessage(alertMessage);
        setAlertType(alertType);
        setAlertIsShown(true);
    }

    const hideAlert = () => {
        setAlertIsShown(false);
    }

    const contextValue: AlertContextProps = {
        alertIsShown,
        showSignInAlert,
        showLogoutAlert,
        setShowSignInAlert,
        setShowLogoutAlert,
        showAlert,
        hideAlert,
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
