import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"

import * as Styled from './styles'

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Styled.TransactionsContainer>
      <SearchForm />
      <Styled.TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento do site</td>
            <td><Styled.PriceHighlight variant="income">R$ 12.000,00</Styled.PriceHighlight></td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>

          <tr>
            <td width="50%">Hamburguer</td>
            <td><Styled.PriceHighlight variant="outcome">- R$ 54,00</Styled.PriceHighlight></td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>

         
        </tbody>
      </Styled.TransactionsTable>
    </Styled.TransactionsContainer>

    </div>
  )
}

export default Transactions 