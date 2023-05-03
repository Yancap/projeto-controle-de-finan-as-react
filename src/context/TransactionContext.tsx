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

interface TransactionProviderProps{
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (title: string, type: string, amount: number, category: string) => Promise<any>;
}

export const TransactionContext = React.createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({children}: TransactionProviderProps){
    
    const [transactions, setTransactions] = React.useState<Transaction[]>([])
    const [reload, setReload ] = React.useState(false)
    React.useEffect(()=>{
      const resp = showTransactions()
      resp.then(response => setTransactions(response))
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
    
    return(
        <TransactionContext.Provider value={{transactions, createTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}