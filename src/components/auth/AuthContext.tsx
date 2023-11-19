import React, {createContext, useContext, useState} from "react";
import {AuthContextProps} from "../../types/Auth/AuthContextProps";
import {AuthProviderProps} from "../../types/Auth/AuthProviderProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const contextValue: AuthContextProps = {
        isAuth,
        setIsAuth
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};