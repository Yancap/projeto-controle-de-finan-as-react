import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { LoginContext } from '../../context/LoginContext';
import {Link, useNavigate} from 'react-router-dom'
import { autoLogin } from '../../services/requests';
import { TransactionContext } from '../../context/TransactionContext';

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export const Header = ({onOpenTransactionModal}:HeaderProps) => {
  const {isLogin, name, setName, setIsLogin} = React.useContext(LoginContext)
  const navigate = useNavigate()
  React.useEffect(()=>{
    const nameStorage = localStorage.getItem('name')
    if (nameStorage) setName(nameStorage)
    autoLogin(navigate)
  }, [])
  function loginOut(){
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    setName('')
    setIsLogin(false)
    navigate('/')
  }
  return (
    <Container>
      <Content >
        <img src={logo} alt="dt-money" />
        <h2>{name}</h2>
        {isLogin ? 
        <div>
            <button type='button' onClick={onOpenTransactionModal}>
            Nova Transação
            </button> 
            <button type='button' onClick={loginOut}>
              Sair
            </button> 
        </div>
          
      :
        
          <Link to='login'>
            <button type='button'>
              Login
            </button>
          </Link>
      }

      </Content>
    </Container>
  )
}
