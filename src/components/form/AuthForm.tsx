import React, {ChangeEvent, useState} from 'react';
import AuthInput from "../UI/input/AuthInput";
import DefaultButton from "../UI/button/DefaultButton";
import {signInUser} from '../../api/authApi';
import {AuthFormProps} from "../../types/Form/AuthFormProps";
import {useAuth} from "../auth/AuthContext";
import {useNavigate} from 'react-router-dom';
import {useAlert} from "../UI/alert/AlertContext";
import {AlertStatuses} from "../../constants/AlertStatuses";

const AuthForm: React.FunctionComponent<AuthFormProps> = ({isRegister}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();
    const {setIsAuth} = useAuth();
    const {setIsShown, setAlertMessage, setAlertType} = useAlert();

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
                <form onSubmit={(e: React.FormEvent) => isRegister ? null : singIn(e)}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <AuthInput
                            id="username"
                            type="text"
                            name="Username"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <AuthInput
                            id="password"
                            type="password"
                            name="Password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>

                    {isRegister ?
                        <div className="mb-4">
                            <AuthInput
                                id="repeat-password"
                                type="password"
                                name="Repeat Password"
                                value={repeatPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
                            />
                        </div> : ''
                    }

                    <div>
                        <DefaultButton text={isRegister ? 'Sign Up' : 'Sign In'} type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;