import React from 'react'
import { Container } from './styles'
import { EditTransaction, TransactionContext } from '../../context/TransactionContext'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import { ReactComponent as Close } from '../../assets/close-settings.svg'
import { ReactComponent as Edit } from '../../assets/edit.svg'
import { ReactComponent as Delete } from '../../assets/delete.svg'
import { LoginContext } from '../../context/LoginContext'

interface TableProps {
    onOpenTransactionModal: () => void;
  }
  
export const TransactionTable = ({onOpenTransactionModal}: TableProps) => {
  const {transactions, setEdit, deleteTransactions} = React.useContext(TransactionContext)
  const { isLogin } = React.useContext(LoginContext)
  const [settings, setSettings] = React.useState(false)
  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Datas</th>
                    <th className='settings'>
                        <div className='settings' onClick={() => setSettings(!settings)}>
                            {settings ? <Close /> : <Settings />}
                        </div>
                    </th>
                    
                </tr>
            </thead>

            <tbody>
                {isLogin && transactions.map( data => (
                    <tr key={data.id} data-transaction={data.id}>
                        <td>{data.title}</td>
                        <td className={data.type}>
                            {new Intl.NumberFormat('pt-BR', {
                                style:'currency',
                                currency:'BRL'
                            }).format(data.amount)}
                        </td>
                        <td>{data.category}</td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR').format(new Date(data.createdAt))}
                        </td>
                        <td className='config' style={{animation: settings ? 'openConfig .5s linear forwards' : 'closeConfig .5s linear forwards'}}>
                            <div className='edit' data-info={data}
                                onClick={() =>{
                                    setEdit(data as EditTransaction)
                                    onOpenTransactionModal()
                                }}
                            >
                              <Edit />  
                            </div>
                            <div className='delete'
                                onClick={() =>{
                                    deleteTransactions(data.id)
                                }}>
                               <Delete /> 
                            </div>
                            
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Container>
  )
}
