import axios from "axios";

import {SignInRequestProperties} from "../types/API/SignIn/SignInRequestProperties";
import {SignInResponseProperties} from "../types/API/SignIn/SignInResponseProperties";

const BASE_URL: string = process.env.REACT_APP_BASE_QUIZLER_URL || '';

export const signInUser = async (properties: SignInRequestProperties): Promise<SignInResponseProperties> => {
    try {
        const response = await axios.post(BASE_URL + '/api/login_check', properties);

        return response.data;
    } catch (error) {
        console.error('Error logging user:', error);

        throw error;
    }
}

export const logoutUser = async () => {
    try {
        return await axios.get(BASE_URL + '/api/logout');
    } catch (error) {
        console.error('Error while logging out the user:', error);

        throw error;
    }
}