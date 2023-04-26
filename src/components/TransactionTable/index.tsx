import React from 'react'
import { Container } from './styles'
import { TransactionContext } from '../../context/TransactionContext'



export const TransactionTable = () => {
  const {transactions} = React.useContext(TransactionContext)
  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Datas</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map( data => (
                    <tr key={data.id}>
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
                    </tr>
                ))}

            </tbody>
        </table>
    </Container>
  )
}
