import React from 'react'
import { Container } from './styles'
import { Summary } from '../Summary'
import { TransactionTable } from '../TransactionTable'
interface DashboardProps {
  handleOpenModal: () => void;
}

export const Dashboard = ({handleOpenModal}: DashboardProps) => {
  return (
    <Container>
        <Summary />
        <TransactionTable onOpenTransactionModal={handleOpenModal}/>
    </Container>
  )
}
