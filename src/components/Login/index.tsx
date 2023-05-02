import React from 'react'
import { Container, Form } from './styles'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../services/requests';
import { LoginContext } from '../../context/LoginContext';

interface Login{
  email: string;
  password: string;
}



export const Login = () => {
  const {setIsLogin} = React.useContext(LoginContext)
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('null')
  const navigate = useNavigate()
  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    const response = await fetchLogin(login.email, login.password)
    if ('error' in response) {
      setError(response.error)
    } else {
      setError('null')
      localStorage.setItem('token', response.token)
      setIsLogin(true)
      navigate('/')
    }
  }
  return (
    <Container>
        <h1>
          LOGIN
        </h1>
        <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input onChange={({currentTarget})=> setLogin({...login, ['email']: currentTarget.value})} 
                type='email' id='email' value={login.email}/>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input onChange={({currentTarget})=> setLogin({...login, ['password']: currentTarget.value})} 
                type='password' id='password' value={login.password}/>
            </div>
            {error !== 'null' && <span style={{color: 'red'}}>{error}</span>}
            <Link to='/register'>Não tem cadastro?</Link>
            <button type="submit">Login</button>
        </Form>
    </Container>
  )
}
