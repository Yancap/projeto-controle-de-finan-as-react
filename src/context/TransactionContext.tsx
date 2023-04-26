import React, { ReactNode } from "react";
import { api } from "../services/api";

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
    createTransaction: (transactions: TransactionInput) => Promise<void>;
}

export const TransactionContext = React.createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({children}: TransactionProviderProps){
    
    const [transactions, setTransactions] = React.useState<Transaction[]>([])
    React.useEffect(()=>{
      api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
    }, [])
    async function createTransaction(transactionsInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionsInput,
            createdAt: new Date()
        })
        const { transaction } = response.data
        setTransactions([...transactions, transaction])
    }
    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}