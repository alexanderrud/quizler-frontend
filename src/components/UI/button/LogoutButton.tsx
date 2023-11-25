import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext";
import {logoutUser} from "../../../api/authApi";
import {useAlert} from "../alert/AlertContext";

const LogoutButton = () => {
    const navigate = useNavigate();
    const {setIsAuth} = useAuth();
    const {setAlertMessage, setAlertType, setIsShown} = useAlert();

    const logout = () => {
        logoutUser().then(() => {
            localStorage.removeItem('auth-token');

            setIsAuth(false);
            setAlertType('info');
            setAlertMessage('You was logged out');
            setIsShown(true);

            return navigate('/');
        })
    }

    return (
        <div>
            <button onClick={logout} className="quizler-link">
                <span>Log out</span>
                <span className="quizler-link__selected bg-yellow-400"></span>
            </button>
        </div>
    )
};

export default LogoutButton;