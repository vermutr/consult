import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const loginService = async (email: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/authenticate`, { email, password });
    return response.data;
}

export const registerService = async (email: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/register`, { email, password });
    return response.data;
}