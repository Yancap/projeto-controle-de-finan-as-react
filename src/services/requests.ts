import { api } from "./api";

interface LoginResponse{
    token: string;
    name: string;
    message: string;
}
interface LoginError{
    error: string;
}

interface RegisterResponse{
    token: string;
    name: string;
    message: string;
}
interface RegisterError{
    error: string;
}

export async function fetchLogin(email: string, password: string): Promise<LoginResponse | LoginError>{
    const response = await api.post('users/login', {email, password});
    if ('error' in response.data) {
        return {error: response.data.error};
    }
    return response.data;
}

export async function fetchRegister(email: string, password: string, name: string): Promise<LoginResponse | LoginError>{
    const response = await api.post('users/register', {email, password, name});
    if ('error' in response.data) {
        return {error: response.data.error};
    }
    return response.data;
}