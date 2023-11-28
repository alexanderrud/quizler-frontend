import axios from "axios";

import {SignInRequestProperties} from "../types/API/SignIn/SignInRequestProperties";

const BASE_URL: string = process.env.REACT_APP_BASE_QUIZLER_URL || '';

export const signInUser = async (properties: SignInRequestProperties) => {
    try {
        const response = await axios.post(BASE_URL + '/api/login_check', properties);

        return response.data;
    } catch {
        throw new Error('Failed to fetch user data');
    }
}

export const logoutUser = async () => {
    return await axios.get(BASE_URL + '/logout');
}