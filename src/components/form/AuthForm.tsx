import React, {ChangeEvent, useContext, useState} from 'react';
import AuthInput from "../UI/input/AuthInput";
import DefaultButton from "../UI/button/DefaultButton";
import {signInUser} from '../../api/authApi';
import {AuthFormProps} from "../../types/Form/AuthFormProps";
import {useAuth} from "../auth/AuthContext";

const AuthForm: React.FunctionComponent<AuthFormProps> = ({isRegister}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const {setIsAuth} = useAuth();

    async function singIn(e: React.FormEvent): Promise<void> {
        e.preventDefault();

        const responseData = await signInUser({username, password});
        const token = responseData.token;

        if (token !== null && token !== '') {
            return handleSuccessSignIn(responseData.token);
        }

        return;
    }

    function handleSuccessSignIn(token: string) {
        setIsAuth(true);
    }

    function signUp(e: React.FormEvent) {
    }

    return (
        <div className="flex justify-center items-center relative top-40">
            <div className="w-1/4">
                <form onSubmit={(e: React.FormEvent) => isRegister ? signUp(e) : singIn(e)}
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