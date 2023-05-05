import React, { ReactNode } from "react";
import { api } from "../services/api";
import { showTransactions } from "../services/requests";

interface Transaction{
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
export type EditTransaction = Omit<Transaction, 'createdAt'>

interface TransactionProviderProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (title: string, type: string, amount: number, category: string) => Promise<any>;
    updateTransactions: (id:number, title: string, type: string, amount: number, category: string) => Promise<any>;
    deleteTransactions: (id:number) => Promise<any>;
    edit: EditTransaction;
    setEdit: (edit: EditTransaction) => void;
    transactionModal: boolean;
    setTransactionModal: (transactionModal: boolean) => void;
    error: Error;
    setError: (error: Error) => void;
    del: Delete;
    setDel: (del: Delete) => void;
}

interface Error {
    message: string;
    error: boolean;
    redirect: boolean;
}

interface Delete{
    id: number;
}

export const TransactionContext = React.createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({children}: TransactionProviderProps){
    
    const [ transactions, setTransactions ] = React.useState<Transaction[]>([])
    const [ transactionModal, setTransactionModal ] = React.useState(false)
    const [reload, setReload ] = React.useState(false)
    const [ error, setError ] = React.useState<Error>({} as Error)
    const [ del, setDel] = React.useState({} as Delete)
    const [edit, setEdit] = React.useState<EditTransaction>({
        id: 0,
        title: "",
        amount: 0,
        type: "",
        category: ""
    })
    React.useEffect(()=>{
      const resp = showTransactions()
      resp.then(response => {
        if (response.error || response.redirect) {
            return setError(response)
        }
        return setTransactions(response)
    })
    }, [reload])
    async function createTransactions(title: string, type: string, amount: number, category: string){
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
        setReload(!reload)
        return response
    }
     async function updateTransactions(id: number, title: string, type: string, amount: number, category: string){
        const token = localStorage.getItem('token');
        const response = await api.put('transactions/update', {
            id, title, type, amount, category
        },{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        setReload(!reload)
        return response.data;
    }
    async function deleteTransactions(id: number){
        const token = localStorage.getItem('token');
        const response = await api.delete('transactions/delete', {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Target': id
            }
        });
        setReload(!reload)
        return response.data;
    }
    return(
        <TransactionContext.Provider 
        value={{transactions, createTransactions, updateTransactions, deleteTransactions, edit, setEdit, 
        transactionModal, setTransactionModal, error, setError, del, setDel}}>
            {children}
        </TransactionContext.Provider>
    )
}