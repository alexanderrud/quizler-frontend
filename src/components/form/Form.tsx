import React from 'react';
import AuthInput from "../UI/input/AuthInput";
import DefaultButton from "../UI/button/DefaultButton";

const Form = (props: { isRegister: boolean }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 h-96">
                <form action="#" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                        <AuthInput id="email" type="text"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password">Password</label>
                        <AuthInput id="password" type="password"/>
                    </div>

                    {props.isRegister ?
                        <div className="mb-4">
                            <label htmlFor="repeat-password">Repeat password</label>
                            <AuthInput id="repeat-password" type="password"/>
                        </div> : ''
                    }

                    <div>
                        <DefaultButton text="Sign In"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;