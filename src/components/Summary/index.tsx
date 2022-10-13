import * as Styled from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

const Summary = () => {
  return (
    <Styled.Container>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>R$17.400,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75A68"/>
        </header>
        <strong>R$17.400,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard  variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>R$17.400,00</strong>
      </Styled.SummaryCard>
    </Styled.Container>
  )
}

export default Summary