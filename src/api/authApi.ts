import axios from "axios";

import {RegisterRequestProperties} from "../types/API/Register/RegisterRequestProperties";
import {LoginRequestProperties} from "../types/API/Login/LoginRequestProperties";
import {LoginResponseProperties} from "../types/API/Login/LoginResponseProperties";
import {RegisterResponseProperties} from "../types/API/Register/RegisterResponseProperties";

const BASE_URL: string = process.env.REACT_APP_BASE_QUIZLER_URL || '';

export const loginUser = async (properties: LoginRequestProperties): Promise<LoginResponseProperties> => {
    try {
        const response = await axios.post(BASE_URL + '/api/login', properties);

        return {responseData: response.data, status: response.status};
    } catch (error) {
        console.error('Error logging user:', error);

        throw error;
    }
}

export const registerUser = async (properties: RegisterRequestProperties): Promise<RegisterResponseProperties> => {
    try {
        const response = await axios.post(BASE_URL + '/api/register', properties);

        return {responseData: response.data, status: response.status};
    } catch (error) {
        console.error('Error logging user:', error);

        throw error;
    }
}
