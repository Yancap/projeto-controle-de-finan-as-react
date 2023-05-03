import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { LoginContext } from '../../context/LoginContext';
import {Link, useNavigate} from 'react-router-dom'
import { autoLogin } from '../../services/requests';

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export const Header = ({onOpenTransactionModal}:HeaderProps) => {
  const {isLogin, name, setName} = React.useContext(LoginContext)
  const navigate = useNavigate()
  React.useEffect(()=>{
    const nameStorage = localStorage.getItem('name')
    if (nameStorage) setName(nameStorage)
    autoLogin(navigate)
  }, [])
  return (
    <Container>
      <Content >
        <img src={logo} alt="dt-money" />
        <h2>{name}</h2>
        {isLogin ? 
          <button type='button' onClick={onOpenTransactionModal}>
            Nova Transação
            </button> 
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
