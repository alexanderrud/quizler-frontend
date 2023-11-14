import React from 'react';
import AuthInput from "../UI/input/AuthInput";
import DefaultButton from "../UI/button/DefaultButton";
import {AuthFormProps} from "../../types/Form/AuthFormProps";

const AuthForm: React.FunctionComponent<AuthFormProps> = ({isRegister}) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 h-96">
                <form action="#" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <AuthInput id="email" type="text" name="Email"/>
                    </div>

                    <div className="mb-6">
                        <AuthInput id="password" type="password" name="Password"/>
                    </div>

                    {isRegister ?
                        <div className="mb-4">
                            <AuthInput id="repeat-password" type="password" name="Repeat Password"/>
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