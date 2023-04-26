import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { TransactionModal } from "./components/TransactionModal";
import { TransactionProvider } from "./context/TransactionContext";


Modal.setAppElement('#root')
export function App() {
  const [ transactionModal, setTransactionModal ] = React.useState(false)
  function handleOpenModal(){
    setTransactionModal(true)
  }
  function handleCloseModal(){
    setTransactionModal(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenTransactionModal={handleOpenModal}/>
      <Dashboard />
      <GlobalStyle />
      <TransactionModal 
      isOpen={transactionModal}
      onRequestClose={handleCloseModal}/>
    </TransactionProvider>
  );
}

