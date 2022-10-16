import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"

import * as Styled from './styles'

interface Transaction {
  id:number;
  description:string;
  type:'income'|'outcome'
  price:number;
  category:string;
  createdAt:string;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    fetch('http://localhost:3333/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])

  return (
    <div>
      <Header />
      <Summary />
      <Styled.TransactionsContainer>
      <SearchForm />
      <Styled.TransactionsTable>
        <tbody>
          {transactions.map( transaction => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td><Styled.PriceHighlight variant={transaction.type}>R${transaction.price}</Styled.PriceHighlight></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
         
        </tbody>
      </Styled.TransactionsTable>
    </Styled.TransactionsContainer>

    </div>
  )
}

export default Transactions 