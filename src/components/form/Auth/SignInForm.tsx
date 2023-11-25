import '../Form.css';
import React, {ChangeEvent} from 'react';
import {signInUser} from "../../../api/authApi";
import {useGetAuthForm} from "../../../hooks/useGetAuthForm";
import {AlertStatuses} from "../../../constants/AlertStatuses";
import {useAlert} from "../../UI/alert/AlertContext";
import {useAuth} from "../../auth/AuthContext";
import {useNavigate} from "react-router-dom";
import AuthInput from "../../UI/input/AuthInput";
import DefaultButton from "../../UI/button/DefaultButton";

const SignInForm = () => {
    const {handleUsername, username, handlePassword, password} = useGetAuthForm();
    const {setIsShown, setAlertMessage, setAlertType} = useAlert();
    const {setIsAuth} = useAuth();
    const navigate = useNavigate();

    async function singIn(e: React.FormEvent): Promise<void> {
        e.preventDefault();

        try {
            const responseData = await signInUser({username, password});
            const token = responseData.token;

            if (token !== null && token !== '') {
                handleSuccessSignIn(token);
            }
        } catch (error) {
            handleFailedSignIn();
        }

        return;
    }

    function handleSuccessSignIn(token: string) {
        localStorage.setItem('auth-token', token);
        localStorage.setItem('alertShown', 'yes');

        setIsAuth(true);
        setIsShown(true);
        setAlertMessage("You're logged in!");
        setAlertType(AlertStatuses.SUCCESS);

        return navigate("/");
    }

    function handleFailedSignIn() {
        setIsShown(true);
        setAlertMessage("Error occurred! Please try again!");
        setAlertType(AlertStatuses.ERROR);
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