import React from "react";
import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
//import { createTransactions } from "../../services/requests";
import { TransactionContext } from "../../context/TransactionContext";

interface EditTransaction{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
}
interface TransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
    
    const { createTransactions, edit, setEdit } = React.useContext(TransactionContext)
    const [ type, setType ] = React.useState('deposit')
    const [ title, setTitle ] = React.useState('')
    const [ amount, setAmount ] = React.useState(0)
    const [ category, setCategory ] = React.useState('')
  
    
    async function handleCreateNewTransaction(event: React.FormEvent){
      event.preventDefault()
      if (edit.id === 0) {
        await createTransactions( title, type, amount, category)
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
        setEdit({
          id: 0,
          title: '',
          amount: 0,
          type: 'deposit',
          category: ''
        })
      } else {
        //Fazer a requisição de update
      }
      
    }
    React.useEffect(() =>{
      if (edit.id !== 0) {
        setTitle(edit.title)
        setAmount(edit.amount)
        setCategory(edit.category)
        setType(edit.type)
        console.log(edit);
      }
    }, [edit])
    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className='react-modal-content'
          overlayClassName='react-modal-overlay'
          >
          <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={close} alt="Close Modal" />
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <input type="text" 
              placeholder="Titulo"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <input type="number" 
              placeholder="Valor"
              value={amount}
              onChange={event => setAmount(+event.target.value)}
            />
            <TransactionTypeContainer>
              <RadioBox type="button"
                onClick={() => setType('deposit')}
                isActive={type === 'deposit'}
                activeColor='#33cc95'
              >
                <img src={income} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>
              <RadioBox type="button"
                onClick={() => setType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor='#e52e40'
              >
                <img src={outcome} alt="Saida" />
                <span>Saida</span>
              </RadioBox>
            </TransactionTypeContainer>
            <input type="text" 
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
    )
}