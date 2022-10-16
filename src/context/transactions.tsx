import React, { createContext, useEffect, useState } from 'react'

interface Transaction {
  id:number;
  description:string;
  type:'income'|'outcome'
  price:number;
  category:string;
  createdAt:string;
}

interface TransactionContextType {
  transactions:Transaction[]
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionProvider = ({children}:TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    fetch('http://localhost:3333/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data))
  },[])

  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}
  
export default TransactionProvider