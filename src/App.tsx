import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { TransactionModal } from "./components/TransactionModal";
import { TransactionProvider } from "./context/TransactionContext";
import { LoginStorage } from "./context/LoginContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";


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
    <BrowserRouter>
      <GlobalStyle />
      <LoginStorage>
            <TransactionProvider>
              <Header onOpenTransactionModal={handleOpenModal}/>
              <Routes>
                <Route path='/' element={<>
                  <Dashboard />
                  <TransactionModal 
                    isOpen={transactionModal}
                    onRequestClose={handleCloseModal}/>
                </>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </TransactionProvider> 
        </LoginStorage>
    </BrowserRouter>
  );
}

