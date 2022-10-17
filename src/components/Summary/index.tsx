import * as Styled from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionContext } from '../../context/transactions'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

const Summary = () => {
  const summary = useSummary()
  
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