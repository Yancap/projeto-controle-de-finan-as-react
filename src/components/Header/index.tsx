import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { LoginContext } from '../../context/LoginContext';
import {Link} from 'react-router-dom'

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export const Header = ({onOpenTransactionModal}:HeaderProps) => {
  const {isLogin} = React.useContext(LoginContext)
  
  return (
    <Container>
      <Content >
        <img src={logo} alt="dt-money" />
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
