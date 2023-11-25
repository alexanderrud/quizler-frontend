import {useState} from "react";

export const useGetAuthForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleUsername = (username: string) => {
        setUsername(username);
    }

    const handlePassword = (username: string) => {
        setPassword(username);
    }
    const handleRepeatPassword = (username: string) => {
        setRepeatPassword(username);
    }

    return {
        username,
        handleUsername,
        password,
        handlePassword,
        repeatPassword,
        handleRepeatPassword
    };
}