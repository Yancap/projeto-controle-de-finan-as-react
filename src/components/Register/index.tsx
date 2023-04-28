import React from 'react'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export const Register = () => {
  
  return (
    <Container>
        <h1>
          CADASTRAR
        </h1>
        <Form>
            <div>
              <label htmlFor="name">Nome</label>
              <input type='text' id='name'/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type='email' id='email'/>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type='password' id='password'/>
            </div>
            <Link to='/login'>Já tem cadastro?</Link>
            <button type="submit">Cadastrar</button>
        </Form>
    </Container>
  )
}
