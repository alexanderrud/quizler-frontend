import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext";
import {logoutUser} from "../../../api/authApi";

const LogoutButton = () => {
    const navigate = useNavigate();
    const {setIsAuth} = useAuth();

    const logout = () => {
        logoutUser().then(() => {
            localStorage.removeItem('auth-token');
            setIsAuth(false);

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
    );
};

export default LogoutButton;