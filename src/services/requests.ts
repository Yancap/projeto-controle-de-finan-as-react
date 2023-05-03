import { useNavigate } from "react-router-dom";
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

interface Transaction{
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export async function fetchLogin(email: string, password: string): Promise<LoginResponse | LoginError>{
    const response = await api.post('users/login', {email, password});
    if ('error' in response.data) {
        return {error: response.data.error};
    }
    return response.data;
}

export async function fetchRegister(email: string, password: string, name: string): Promise<RegisterResponse | RegisterError>{
    const response = await api.post('users/register', {email, password, name});
    if ('error' in response.data) {
        return {error: response.data.error};
    }
    return response.data;
}

export async function autoLogin(navigate: (url: string) => void){
    const token = localStorage.getItem('token');
    if (token) {
        const response = await api.post('users/login', {}, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
        })
        if (response && response.data.redirect) {
            navigate('/login')
            localStorage.removeItem('name')
            localStorage.removeItem('token')
        } 
    }
    
}

export async function createTransactions(title: string, type: string, amount: number, category: string){
    const token = localStorage.getItem('token');
    const response = await api.post('transactions/create', {
        title,
        type,
        amount,
        category
      }, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response
}

export async function showTransactions(){
    const token = localStorage.getItem('token');
    const response = await api.get('transactions/show', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.data;
}