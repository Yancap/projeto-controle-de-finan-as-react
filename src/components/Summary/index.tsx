import React from 'react'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { Container } from './styles'
import { TransactionContext } from '../../context/TransactionContext'
import { LoginContext } from '../../context/LoginContext'

export const Summary = () => {
  const {transactions}= React.useContext(TransactionContext)
  const { isLogin } = React.useContext(LoginContext)
  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit'){
        acc.deposit += transaction.amount
        acc.total += transaction.amount
    } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
    }
    return acc
  }
  ,{deposit: 0, withdraw: 0, total:0})
  return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>  
                <img src={income} alt="Entradas" />
            </header>
            <strong>
                {isLogin ? new Intl.NumberFormat('pt-BR', {
                                style:'currency',
                                currency:'BRL'
                }).format(summary.deposit) : new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                 }).format(0)}
           </strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>  
                <img src={outcome} alt="Saidas" />
            </header>
            <strong>
                - {isLogin ? new Intl.NumberFormat('pt-BR', {
                                style:'currency',
                                currency:'BRL'
                }).format(summary.withdraw) : new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                 }).format(0)}
            </strong>
        </div>
        <div>
            <header>
                <p>Total</p>  
                <img src={total} alt="Total" />
            </header>
            <strong>
                {isLogin ? new Intl.NumberFormat('pt-BR', {
                                style:'currency',
                                currency:'BRL'
                }).format(summary.total) : new Intl.NumberFormat('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                 }).format(0)}
            </strong>
        </div>
    </Container>
  )
}
