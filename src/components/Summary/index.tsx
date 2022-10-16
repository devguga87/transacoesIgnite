import * as Styled from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionContext } from '../../context/transactions'

const Summary = () => {
  const {transactions} = useContext(TransactionContext)

  const entradas = transactions
    .filter(transaction => transaction.type === 'income')
    .map(transaction => transaction.price)
    .reduce((a,b)=>a+b,0)

  const saidas = transactions
    .filter(transaction => transaction.type ==='outcome')
    .map(transactions => transactions.price)
    .reduce((a,b)=>a+b,0)

  const total = entradas - saidas
  
  return (
    <Styled.Container>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{entradas}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75A68"/>
        </header>
        <strong>{saidas}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{total}</strong>
      </Styled.SummaryCard>
    </Styled.Container>
  )
}

export default Summary