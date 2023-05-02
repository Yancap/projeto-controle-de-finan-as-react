import React from 'react'
import { Container, Form } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { fetchRegister } from '../../services/requests'

export const Register = () => {
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('null')
  const [success, setSuccess] = React.useState(false)
  const navigate = useNavigate()
  async function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    const response = await fetchRegister(register.email, register.password, register.name)
    if ('error' in response) {
      setError(response.error)
      setSuccess(false)
    } else {
      setError('null')
      setSuccess(true)
      alert('Cadastrado com Sucesso')
      navigate('/login')
    }
  }
  return (
    <Container>
        <h1>
          CADASTRAR
        </h1>
        <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <input onChange={({currentTarget})=> setRegister({...register, ['name']: currentTarget.value})}
              type='text' id='name' value={register.name}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input onChange={({currentTarget})=> setRegister({...register, ['email']: currentTarget.value})}
              type='email' id='email' value={register.email}/>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input onChange={({currentTarget})=> setRegister({...register, ['password']: currentTarget.value})}
              type='password' id='password' value={register.password}/>
            </div>
            {error !== 'null' && <span style={{color: 'red'}}>{error}</span>}
            {success  && <span style={{color: 'green'}}>Cadastro feito com sucesso</span>}
            <Link to='/login'>Já tem cadastro?</Link>
            <button type="submit">Cadastrar</button>
        </Form>
    </Container>
  )
}
