import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { TransactionModal } from "./components/TransactionModal";
import { TransactionContext, TransactionProvider } from "./context/TransactionContext";
import { LoginStorage } from "./context/LoginContext";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";


Modal.setAppElement('#root')
export function App() {
  const { transactionModal, setTransactionModal } = React.useContext(TransactionContext)
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
                  <Dashboard handleOpenModal={handleOpenModal} />
                  <TransactionModal 
                    isOpen={transactionModal}
                    onRequestClose={handleCloseModal}
                    />
                </>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              <Footer />
            </TransactionProvider> 
        </LoginStorage>
    </BrowserRouter>
  );
}

