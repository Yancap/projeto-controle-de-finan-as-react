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
    edit: EditTransaction;
    setEdit: (edit: EditTransaction) => void;
    transactionModal: boolean;
    setTransactionModal: (transactionModal: boolean) => void;
}



export const TransactionContext = React.createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({children}: TransactionProviderProps){
    
    const [ transactions, setTransactions ] = React.useState<Transaction[]>([])
    const [ transactionModal, setTransactionModal ] = React.useState(false)
    const [reload, setReload ] = React.useState(false)
    const [del, setDel] = React.useState(false)
    const [edit, setEdit] = React.useState<EditTransaction>({
        id: 0,
        title: "",
        amount: 0,
        type: "",
        category: ""
    })
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
        <TransactionContext.Provider value={{transactions, createTransactions, edit, setEdit, transactionModal, setTransactionModal}}>
            {children}
        </TransactionContext.Provider>
    )
}