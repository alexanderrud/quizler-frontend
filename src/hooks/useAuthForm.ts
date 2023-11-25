import {useState} from "react";

export const useAuthForm = () => {
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