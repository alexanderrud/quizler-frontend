import '../Form.css';
import React, {ChangeEvent} from 'react';
import {signInUser} from "../../../api/authApi";
import {useAuthForm} from "../../../hooks/useAuthForm";
import {useAlert} from "../../UI/alert/AlertContext";
import {useAuth} from "../../auth/AuthContext";
import {useNavigate} from "react-router-dom";
import AuthInput from "../../UI/input/AuthInput";
import DefaultButton from "../../UI/button/DefaultButton";
import {AlertStatuses} from "../../../constants/AlertStatuses";

const SignInForm = () => {
    const {handleUsername, username, handlePassword, password} = useAuthForm();
    const {showAlert, setShowSignInAlert, setShowLogoutAlert} = useAlert();
    const {setIsAuth} = useAuth();
    const navigate = useNavigate();

    const singIn = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        return signInUser({username, password}).then((response) => {
            const token = response.data;
            handleSuccessSignIn(token);
        }).catch((error) => handleFailedSignIn(error.message));
    }

    const handleSuccessSignIn = (token: string) => {
        localStorage.setItem('auth-token', token);
        localStorage.setItem('alertShown', 'yes');

        setIsAuth(true);
        setShowLogoutAlert(false);
        setShowSignInAlert(true);
        showAlert("You're logged in!", AlertStatuses.SUCCESS);

        return navigate("/");
    }

    const handleFailedSignIn = (message: string) => {
        showAlert(message, AlertStatuses.ERROR);

        return navigate("/login");
    }

    return (
        <div className="flex justify-center items-center relative top-40">
            <div className="w-1/4">
                <form onSubmit={(e: React.FormEvent) => singIn(e)}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <AuthInput
                            id="username"
                            type="text"
                            name="Username"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <AuthInput
                            id="password"
                            type="password"
                            name="Password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handlePassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <DefaultButton text='Sign In' type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;