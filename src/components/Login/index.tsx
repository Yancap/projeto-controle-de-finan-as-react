import React from 'react'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export const Login = () => {
  
  return (
    <Container>
        <h1>
          LOGIN
        </h1>
        <Form>
            <div>
              <label htmlFor="email">Email</label>
              <input type='email' id='email'/>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type='password' id='password'/>
            </div>
            <Link to='/register'>Não tem cadastro?</Link>
            <button type="submit">Login</button>
        </Form>
    </Container>
  )
}
