import * as Styled from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionContext } from '../../context/transactions'
import { priceFormatter } from '../../utils/formatter'

const Summary = () => {
  const {transactions} = useContext(TransactionContext)

  const summary = transactions.reduce((acc, transaction)=>{
    if(transaction.type === 'income'){
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  }, {
    income:0,
    outcome:0,
    total:0
  })
  
  return (
    <Styled.Container>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75A68"/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </Styled.SummaryCard>
    </Styled.Container>
  )
}

export default Summary