import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import { TransactionContext } from "../../context/transactions";
import { dataFormatter, priceFormatter } from "../../utils/formatter";
import SearchForm from "./components/SearchForm";

import * as Styled from "./styles";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <Header />
      <Summary />
      <Styled.TransactionsContainer>
        <SearchForm />
        <Styled.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <Styled.PriceHighlight variant={transaction.type}>
                      {transaction.type ==='outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </Styled.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  );
};

export default Transactions;
